
// Configuration
const PHP_API_URL = 'https://watchasports.com/stream.php';
const UPDATE_INTERVAL_NORMAL = 30000; // 30 seconds for normal matches
const UPDATE_INTERVAL_LIVE = 10000;   // 10 seconds when live matches exist
const MAX_RETRIES = 3;

// Global state
let containerStates = new Map(); // Track state for each container
let updateInterval = null;
let retryCount = 0;
let isUpdating = false;
let allMatches = [];

// Container management class
class MatchContainer {
    constructor(element, containerId) {
        this.element = element;
        this.containerId = containerId;
        this.currentMatch = null;
        this.isUpdated = false;
        
        // Cache DOM elements for this container
        this.cache = {
            homeTeam: element.querySelector('.matchname.left'),
            awayTeam: element.querySelector('.matchname.right'),
            homeLogo: element.querySelector('.matchlogo.left img'),
            awayLogo: element.querySelector('.matchlogo.right img'),
            timeElement: element.querySelector('.matchTime .stsrt'),
            infoBox: element.querySelector('.info ul'),
            dateElement: element.querySelector('[data-start]')
        };
    }

    // Find corresponding match for this container
    findMatch(matches) {
        if (!matches.length) return null;
        
        // Method 1: Try to find by date element ID
        if (this.cache.dateElement && this.cache.dateElement.id) {
            const containerId = this.cache.dateElement.id;
            const matchById = matches.find(m => m.id.toString() === containerId);
            if (matchById) {
                console.log(`📍 Container ${this.containerId}: Found match by ID ${containerId}: ${matchById.home} vs ${matchById.away}`);
                return matchById;
            }
        }
        
        // Method 2: Try to match by existing team names
        const existingHomeTeam = this.cache.homeTeam?.textContent?.trim().replace(/\s*\(\d+\)/, ''); // Remove scores
        const existingAwayTeam = this.cache.awayTeam?.textContent?.trim().replace(/\(\d+\)\s*/, ''); // Remove scores
        
        if (existingHomeTeam && existingAwayTeam) {
            const matchByTeams = matches.find(m => {
                const homeMatch = this.teamNameMatches(m.home, existingHomeTeam);
                const awayMatch = this.teamNameMatches(m.away, existingAwayTeam);
                return homeMatch && awayMatch;
            });
            
            if (matchByTeams) {
                console.log(`📍 Container ${this.containerId}: Found match by teams: ${matchByTeams.home} vs ${matchByTeams.away}`);
                return matchByTeams;
            }
        }
        
        // Method 3: Use priority-based selection for unmatched containers
        console.log(`📍 Container ${this.containerId}: Using priority selection`);
        
        // Skip already assigned matches
        const assignedMatches = Array.from(containerStates.values())
            .filter(container => container !== this && container.currentMatch)
            .map(container => container.currentMatch.id);
        
        const availableMatches = matches.filter(m => !assignedMatches.includes(m.id));
        
        if (availableMatches.length === 0) return null;
        
        // Priority: Live > Today's matches > Tomorrow's matches > Recent finished > Others
        const liveMatches = availableMatches.filter(m => m.isLive);
        if (liveMatches.length) return liveMatches[0];
        
        const todayMatches = availableMatches.filter(m => m.isToday && !m.isFinished);
        if (todayMatches.length) return todayMatches[0];
        
        const todayFinished = availableMatches.filter(m => m.isToday && m.isFinished);
        if (todayFinished.length) return todayFinished[0];
        
        const tomorrowMatches = availableMatches.filter(m => m.isTomorrow);
        if (tomorrowMatches.length) return tomorrowMatches[0];
        
        return availableMatches[0];
    }

    // Check if team names match (with fuzzy matching)
    teamNameMatches(apiName, htmlName) {
        if (!apiName || !htmlName) return false;
        
        const normalize = name => name.toLowerCase().trim();
        const apiNorm = normalize(apiName);
        const htmlNorm = normalize(htmlName);
        
        return apiNorm === htmlNorm || 
               apiNorm.includes(htmlNorm) || 
               htmlNorm.includes(apiNorm);
    }

    // Update this container with match data
    update(match) {
        if (!match) {
            this.markAsNotFound();
            return;
        }

        // Skip update if data hasn't changed
        if (this.currentMatch && 
            this.currentMatch.id === match.id &&
            this.currentMatch.homeScore === match.homeScore &&
            this.currentMatch.awayScore === match.awayScore &&
            this.currentMatch.status === match.status) {
            return;
        }

        console.log(`🔄 Container ${this.containerId}: Updating ${match.home} vs ${match.away} (${match.status})`);

        // Update logos
        this.updateLogo(this.cache.homeLogo, match.homeLogo, match.home);
        this.updateLogo(this.cache.awayLogo, match.awayLogo, match.away);
        
        // Update team display and scores
        this.updateTeamDisplay(match);
        
        // Update match info
        this.updateMatchInfo(match);
        
        // Update styling
        this.updateStyling(match);
        
        // Update data attributes
        this.updateDataAttributes(match);
        
        // Remove not-found styling
        this.element.classList.remove('container-not-found');
        
        this.currentMatch = match;
        this.isUpdated = true;
    }

    updateLogo(imgElement, logoUrl, teamName) {
        if (!imgElement || !logoUrl) return;
        
        if (imgElement.src !== logoUrl) {
            imgElement.onerror = () => {
                imgElement.src = `https://via.placeholder.com/70x70/cccccc/ffffff?text=${encodeURIComponent(teamName.substring(0, 3))}`;
            };
            imgElement.src = logoUrl;
            imgElement.alt = teamName;
            imgElement.title = teamName;
        }
    }

    updateTeamDisplay(match) {
        if (!this.cache.homeTeam || !this.cache.awayTeam) return;
        
        const showScores = match.isLive || match.isFinished || match.homeScore > 0 || match.awayScore > 0;
        
        if (showScores) {
            this.cache.homeTeam.innerHTML = `${match.home} <b>(${match.homeScore})</b>`;
            this.cache.awayTeam.innerHTML = `<b>(${match.awayScore})</b> ${match.away}`;
            
            if (this.cache.timeElement) {
                const statusText = match.isLive ? 
                    `<span class="status-indicator status-live"></span>Live` : 
                    match.isFinished ? 'FT' : 'Soon';
                
                this.cache.timeElement.innerHTML = `
                    <b>${match.homeScore} - ${match.awayScore}</b><br>
                    <small>${statusText}</small>
                `;
            }
        } else {
            this.cache.homeTeam.textContent = match.home;
            this.cache.awayTeam.textContent = match.away;
            
            if (this.cache.timeElement && match.localTime) {
                this.cache.timeElement.innerHTML = `
                    <span class="status-indicator status-scheduled"></span>
                    ${match.localTime}
                `;
            }
        }
    }

    updateMatchInfo(match) {
        if (!this.cache.infoBox) return;
        
        const statusText = match.isLive ? 'LIVE' : 
                          match.isFinished ? 'FINAL' : 'UPCOMING';
        
        const matchdayInfo = match.matchday ? `Matchday ${match.matchday}` : 
                            match.competition || 'Premier League';
        
        this.cache.infoBox.innerHTML = `
            <li><span>${statusText}</span></li>
            <li><span><b>PREMIER LEAGUE</b></span></li>
            <li><span class="lgnm">${matchdayInfo}</span></li>
        `;
    }

    updateStyling(match) {
        this.element.classList.remove('match-finished', 'match-scheduled', 'match-live');
        
        if (match.isLive) {
            this.element.classList.add('match-live');
        } else if (match.isFinished) {
            this.element.classList.add('match-finished');
        } else {
            this.element.classList.add('match-scheduled');
        }
    }

    updateDataAttributes(match) {
        if (!this.cache.dateElement || !match.utcDate) return;
        
        const utcDate = new Date(match.utcDate);
        const istDate = new Date(utcDate.getTime() + (5.5 * 60 * 60 * 1000));
        const istDateTime = istDate.toISOString().slice(0, -1) + '+05:30';
        
        this.cache.dateElement.setAttribute('data-start', istDateTime);
        
        const endTime = new Date(utcDate.getTime() + (2.5 * 60 * 60 * 1000));
        const istEndDateTime = new Date(endTime.getTime() + (5.5 * 60 * 60 * 1000)).toISOString().slice(0, -1) + '+05:30';
        this.cache.dateElement.setAttribute('data-gameends', istEndDateTime);
        
        if (match.id && this.cache.dateElement.id !== match.id.toString()) {
            this.cache.dateElement.id = match.id.toString();
        }
    }

    markAsNotFound() {
        this.element.classList.add('container-not-found');
        console.log(`⚠️ Container ${this.containerId}: No matching data found`);
    }
}

// Initialize all containers
function initializeContainers() {
    const containers = document.querySelectorAll('.containermatch');
    console.log(`🔧 Found ${containers.length} match containers`);
    
    containers.forEach((element, index) => {
        const containerId = element.getAttribute('data-container-id') || index + 1;
        const container = new MatchContainer(element, containerId);
        containerStates.set(containerId, container);
    });
    
    return containerStates.size > 0;
}

// Update page title based on all matches
function updatePageTitle(matches) {
    const titleElement = document.querySelector('.boxstitle strong');
    if (!titleElement || !matches.length) return;
    
    const liveCount = matches.filter(m => m.isLive).length;
    const totalUpdated = Array.from(containerStates.values()).filter(c => c.isUpdated).length;
    
    if (liveCount > 0) {
        titleElement.innerHTML = `🔴 Live Matches (${liveCount})`;
    } else {
        titleElement.innerHTML = `Today's Matches (${totalUpdated} active)`;
    }
}

// Main update function
async function updateAllContainers() {
    if (isUpdating) return;
    isUpdating = true;
    
    try {
        console.log('⚽ Fetching match data for all containers...');
        
        const response = await fetch(`${PHP_API_URL}?competition=PL&timezone=Asia/Kolkata&_t=${Date.now()}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache'
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const apiData = await response.json();
        console.log(`📊 API Response: ${apiData.matches?.length || 0} matches, from cache: ${apiData.query_info?.from_cache}`);

        if (!apiData.success || !Array.isArray(apiData.matches)) {
            throw new Error(apiData.error || 'Invalid API response');
        }

        allMatches = apiData.matches;
        if (allMatches.length === 0) {
            console.log('⚠️ No matches found');
            return;
        }

        // Update each container
        let updatedCount = 0;
        containerStates.forEach(container => {
            const match = container.findMatch(allMatches);
            container.update(match);
            if (match) updatedCount++;
        });

        // Update page title
        updatePageTitle(allMatches);

        // Adjust update interval based on live matches
        const hasLiveMatches = allMatches.some(m => m.isLive);
        const newInterval = hasLiveMatches ? UPDATE_INTERVAL_LIVE : UPDATE_INTERVAL_NORMAL;
        
        if (updateInterval && 
            (hasLiveMatches && updateInterval._interval !== UPDATE_INTERVAL_LIVE) ||
            (!hasLiveMatches && updateInterval._interval !== UPDATE_INTERVAL_NORMAL)) {
            
            console.log(`⏰ Adjusting update interval to ${newInterval/1000}s`);
            clearInterval(updateInterval);
            updateInterval = setInterval(updateAllContainers, newInterval);
            updateInterval._interval = newInterval;
        }

        console.log(`✅ Updated ${updatedCount}/${containerStates.size} containers`);
        retryCount = 0;

    } catch (error) {
        console.error('❌ Update failed:', error.message);
        handleUpdateError(error);
    } finally {
        isUpdating = false;
    }
}

// Handle update errors
function handleUpdateError(error) {
    retryCount++;
    
    if (retryCount <= MAX_RETRIES) {
        const retryDelay = Math.min(5000 * retryCount, 30000);
        console.log(`🔄 Retrying in ${retryDelay/1000}s... (${retryCount}/${MAX_RETRIES})`);
        setTimeout(updateAllContainers, retryDelay);
    } else {
        console.error('❌ Max retries reached');
        
        // Show error in all containers
        containerStates.forEach(container => {
            if (container.cache.timeElement) {
                container.cache.timeElement.innerHTML = '<span style="color: red; font-size: 12px;">⚠️ Connection Error</span>';
            }
        });
        
        // Reset retry count after 2 minutes
        setTimeout(() => {
            retryCount = 0;
            updateAllContainers();
        }, 120000);
    }
}

// Initialize the system
async function initialize() {
    console.log('🚀 Initializing Multi-Container Match Updater...');
    
    // Initialize containers
    if (!initializeContainers()) {
        console.error('❌ No match containers found');
        return;
    }
    
    // Initial update
    await updateAllContainers();
    
    // Set up regular updates
    updateInterval = setInterval(updateAllContainers, UPDATE_INTERVAL_NORMAL);
    updateInterval._interval = UPDATE_INTERVAL_NORMAL;
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (updateInterval) clearInterval(updateInterval);
    });
    
    console.log(`✅ Multi-Container Match Updater initialized with ${containerStates.size} containers`);
}

// Expose control functions
window.matchUpdater = {
    updateNow: updateAllContainers,
    getStatus: () => ({
        isUpdating,
        retryCount,
        interval: updateInterval?._interval,
        containerCount: containerStates.size,
        containers: Array.from(containerStates.entries()).map(([id, container]) => ({
            id,
            isUpdated: container.isUpdated,
            match: container.currentMatch ? `${container.currentMatch.home} vs ${container.currentMatch.away}` : 'No match'
        })),
        totalMatches: allMatches.length,
        liveMatches: allMatches.filter(m => m.isLive).length
    }),
    forceRefresh: async () => {
        containerStates.forEach(container => {
            container.currentMatch = null;
            container.isUpdated = false;
        });
        await updateAllContainers();
    },
    getContainer: (id) => containerStates.get(id)
};

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
  }
