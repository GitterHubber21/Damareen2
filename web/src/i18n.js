// Language translations for Damareen
const translations = {
    en: {
        
        'auth.login.title': 'Damareen Login',
        'auth.login.username': 'Username or Email:',
        'auth.login.password': 'Password:',
        'auth.login.button': 'Login',
        'auth.login.noAccount': "Don't have an account?",
        'auth.login.registerLink': 'Register here',
        'auth.login.error': 'Login error occurred: ',
        
        'auth.register.title': 'Damareen Register',
        'auth.register.username': 'Username:',
        'auth.register.email': 'Email:',
        'auth.register.password': 'Password:',
        'auth.register.confirmPassword': 'Confirm Password:',
        'auth.register.button': 'Register',
        'auth.register.hasAccount': 'Already have an account?',
        'auth.register.loginLink': 'Login here',
        'auth.register.passwordMismatch': 'Passwords do not match',
        'auth.register.error': 'Registration error occurred: ',
        
        
        'dashboard.title': 'Damareen',
        'dashboard.worldsTitle': 'My Worlds',
        'dashboard.noWorlds': 'No worlds yet',
        'dashboard.createWorld': 'Create your first world!',
        'dashboard.logout': 'Logout',
        'dashboard.addWorld': 'Add World',
        'dashboard.refresh': 'Refresh',
        'dashboard.settings': 'Settings',
        'dashboard.worldName': 'World Name',
        'dashboard.actions': 'Actions',
        'dashboard.play': 'Play',
        'dashboard.edit': 'Edit',
        'dashboard.delete': 'Delete',
        'dashboard.confirmDelete': 'Are you sure you want to delete',
        'dashboard.worldDeleted': 'World deleted successfully',
        'dashboard.error': 'Error occurred',
        'dashboard.chooseWorld': 'Choose World',
        'dashboard.discovery': 'Discovery',
        'dashboard.start': 'Start',
        'dashboard.hello': 'Welcome',
        
        'settings.title': 'Settings',
        'settings.deleteAccount': 'Delete Account',
        
        'auth.logout.confirmMessage': 'Are you sure you want to logout?',
        'auth.deleteAccount.title': 'Delete Account',
        'auth.deleteAccount.confirmMessage': 'Are you sure you want to delete your account? This action cannot be undone!',
        'auth.deleteAccount.enterPassword': 'Enter your password:',
        
        'common.next': 'Next',
        'common.send': 'Send',
        'common.noEmail': 'No Email',
        'common.emailSent': 'Email sent!',
        'common.password': 'Password',
        'common.updated': 'Updated!',
        'common.sending': 'Sending...',
        'common.deleting': 'Deleting...',
        'common.unknownError': 'An error occurred. Please try again later.',
        'common.networkError': 'Network error',
        'common.missing': 'missing',
        'common.saving': 'Saving...',
        
        'dashboard.noDiscoveryWorlds': 'No new worlds created yet',
        'dashboard.noOwnWorlds': 'You have no worlds yet',
        'dashboard.loadError': 'Error loading worlds',
        'dashboard.selected': 'Selected: ',
        'dashboard.selectWorldError': 'Please select a world!',
        
        'auth.deleteAccount.enterPasswordPrompt': 'Enter your password to continue:',
        'auth.deleteAccount.success': 'Account deleted successfully.',
        'auth.passwordRequired': 'Password is required!',
        
        
        'game.title': 'Game',
        'game.refresh': 'Refresh',
        'game.home': 'Home',
        'game.loading': 'Loading...',
        'game.error': 'Error loading game',
        'game.turn': 'Turn',
        'game.player': 'Player',
        'game.score': 'Score',
        'game.endTurn': 'End Turn',
        'game.winner': 'Winner',
        'game.gameOver': 'Game Over',
        'game.deck': 'Deck',
        'game.saveDeck': 'Save Deck',
        'game.chooseDungeon': 'Choose Opponent Dungeon',
        'game.collection': 'Collection',
        'game.fight': 'FIGHT!',
        'game.chooseUpgradeCard': 'Which card would you like to upgrade upon victory?',
        'game.deckSaved': 'Deck saved successfully!',
        'game.collectionUpdated': 'Collection updated!',
        'game.fightError': 'Error starting fight',
        'game.noDungeons': 'No dungeons yet',
        'game.selectDungeon': 'Select a dungeon',
        'game.selectedDungeon': 'Selected: {count} card dungeon',
        'game.emptyDeck': 'Empty deck',
        'game.deckSizeMismatch': 'Deck and dungeon card count must match',
        'game.saveDeckError': 'Error saving deck',
        'game.deckReordered': 'Deck reordered',
        'game.deckFull': 'Deck can contain max 6 cards',
        'game.cardInDeck': 'Card is already in deck',
        'game.cardAdded': 'Card added to deck (position {pos})',
        'game.cardRemoved': 'Card removed from deck',
        'game.noCardsAssigned': 'Game master has not assigned cards to you yet!',
        'game.allCardsInDeck': 'All your cards are in the deck!',
        'game.deckEmptySave': 'Deck is empty, add at least 1 card',
        'game.deckSizeInvalid': 'Deck must have 1, 4 or 6 cards',
        'game.confirmRefresh': 'Deck changes will be lost. Are you sure you want to refresh?',
        'game.refreshingCards': 'Refreshing cards...',
        'game.missingWorldId': 'Provide world_id in URL',
        'game.startingFight': 'Starting fight...',
        'game.youWon': 'YOU WON!',
        'game.youLost': 'YOU LOST',
        'game.dungeonWon': 'DUNGEON WON',
        'game.clickToContinue': 'Click to continue',
        'game.victory': 'VICTORY!',
        'game.defeat': 'DEFEAT',
        'game.clickAnywhere': 'Click anywhere to continue',
        'game.joinedWorld': 'Joined world',
        'game.reason.damage': 'Damage',
        'game.reason.type': 'Type',
        'game.reason.dungeon_fallback': 'Equal power cards',
        'game.reason': 'Reason',
        'game.round': 'Round',
        'game.type.fire': 'Fire',
        'game.type.water': 'Water',
        'game.type.earth': 'Earth',
        'game.type.air': 'Air',
        'game.cardCount.one': '{count} card',
        'game.cardCount.other': '{count} cards',
        
        
        'world.title': 'World Creation',
        'world.home': 'Home',
        'world.save': 'Save',
        'world.cancel': 'Cancel',
        'world.worldName': 'World Name:',
        'world.worldNamePlaceholder': 'Enter world name',
        'world.mapSize': 'Map Size:',
        'world.players': 'Number of Players:',
        'world.difficulty': 'Difficulty:',
        'world.easy': 'Easy',
        'world.medium': 'Medium',
        'world.hard': 'Hard',
        'world.terrain': 'Terrain Type:',
        'world.grass': 'Grass',
        'world.forest': 'Forest',
        'world.desert': 'Desert',
        'world.snow': 'Snow',
        'world.mountain': 'Mountain',
        'world.water': 'Water',
        'world.saved': 'World saved successfully',
        'world.error': 'Error saving world',
        'world.loading': 'Loading world data...',
        'world.creating': 'Creating new world...',
        'world.editing': 'Editing world...',
        
        
        'common.loading': 'Loading...',
        'common.error': 'Error',
        'common.success': 'Success',
        'common.confirm': 'Confirm',
        'common.cancel': 'Cancel',
        'common.save': 'Save',
        'common.delete': 'Delete',
        'common.edit': 'Edit',
        'common.close': 'Close',
        'common.yes': 'Yes',
        'common.no': 'No',
    },
    hu: {
        
        'auth.login.title': 'Damareen Bejelentkezés',
        'auth.login.username': 'Felhasználónév vagy E-mail:',
        'auth.login.password': 'Jelszó:',
        'auth.login.button': 'Bejelentkezés',
        'auth.login.noAccount': 'Nincs még fiókod?',
        'auth.login.registerLink': 'Regisztrálj itt',
        'auth.login.error': 'Hiba történt a bejelentkezés során: ',
        
        'auth.register.title': 'Damareen Regisztráció',
        'auth.register.username': 'Felhasználónév:',
        'auth.register.email': 'E-mail:',
        'auth.register.password': 'Jelszó:',
        'auth.register.confirmPassword': 'Jelszó megerősítése:',
        'auth.register.button': 'Regisztráció',
        'auth.register.hasAccount': 'Van már fiókod?',
        'auth.register.loginLink': 'Jelentkezz be itt',
        'auth.register.passwordMismatch': 'A jelszavak nem egyeznek',
        'auth.register.error': 'Hiba történt a regisztráció során: ',
        
        
        'dashboard.title': 'Damareen',
        'dashboard.worldsTitle': 'Világaim',
        'dashboard.noWorlds': 'Még nincsenek világok',
        'dashboard.createWorld': 'Hozd létre az első világodat!',
        'dashboard.logout': 'Kijelentkezés',
        'dashboard.addWorld': 'Világ hozzáadása',
        'dashboard.refresh': 'Frissítés',
        'dashboard.settings': 'Beállítások',
        'dashboard.worldName': 'Világ neve',
        'dashboard.actions': 'Műveletek',
        'dashboard.play': 'Játék',
        'dashboard.edit': 'Szerkesztés',
        'dashboard.delete': 'Törlés',
        'dashboard.confirmDelete': 'Biztosan törölni szeretnéd',
        'dashboard.worldDeleted': 'Világ sikeresen törölve',
        'dashboard.error': 'Hiba történt',
        'dashboard.chooseWorld': 'Válassz világot',
        'dashboard.discovery': 'Felfedezés',
        'dashboard.start': 'Kezdés',
        'dashboard.hello': 'Üdv',
        
        'settings.title': 'Beállítások',
        'settings.deleteAccount': 'Fiók törlése',
        
        'auth.logout.confirmMessage': 'Biztosan ki szeretnél jelentkezni?',
        'auth.deleteAccount.title': 'Fiók törlése',
        'auth.deleteAccount.confirmMessage': 'Biztosan törölni szeretnéd a fiókodat? Ez a művelet nem vonható vissza!',
        'auth.deleteAccount.enterPassword': 'Add meg a jelszavad:',
        
        'common.next': 'Tovább',
        'common.send': 'Küldés',
        'common.noEmail': 'Nincs e-mail',
        'common.emailSent': 'Email elküldve!',
        'common.password': 'Jelszó',
        'common.updated': 'Frissítve!',
        'common.sending': 'Küldés...',
        'common.deleting': 'Törlés...',
        'common.unknownError': 'Hiba történt. Kérlek próbáld újra később.',
        'common.networkError': 'Hálózati hiba',
        'common.missing': 'hiányzik',
        'common.saving': 'Mentés...',
        
        'dashboard.noDiscoveryWorlds': 'Még nincs létrehozva új világ',
        'dashboard.noOwnWorlds': 'Még nincs saját világod',
        'dashboard.loadError': 'Hiba a világok betöltésekor',
        'dashboard.selected': 'Kiválasztva: ',
        'dashboard.selectWorldError': 'Kérlek válassz egy világot!',
        
        'auth.deleteAccount.enterPasswordPrompt': 'A folytatáshoz add meg a jelszavadat:',
        'auth.deleteAccount.success': 'Fiókod sikeresen törölve lett.',
        'auth.passwordRequired': 'A jelszó megadása kötelező!',
        
        
        'game.title': 'Játék',
        'game.refresh': 'Frissítés',
        'game.home': 'Kezdőlap',
        'game.loading': 'Betöltés...',
        'game.error': 'Hiba a játék betöltése során',
        'game.turn': 'Kör',
        'game.player': 'Játékos',
        'game.score': 'Pontszám',
        'game.endTurn': 'Kör vége',
        'game.winner': 'Győztes',
        'game.gameOver': 'Játék vége',
        'game.deck': 'Pakli',
        'game.saveDeck': 'Pakli mentése',
        'game.chooseDungeon': 'Válassz ellenfél kazamatát',
        'game.collection': 'Gyűjtemény',
        'game.fight': 'HARC!',
        'game.chooseUpgradeCard': 'Melyik kártyát szeretnéd fejleszteni győzelem esetén?',
        'game.deckSaved': 'Pakli sikeresen mentve!',
        'game.collectionUpdated': 'Gyűjtemény frissítve!',
        'game.fightError': 'Hiba a harc indításakor',
        'game.noDungeons': 'Még nincs kazamata',
        'game.selectDungeon': 'Válassz egy kazamatát',
        'game.selectedDungeon': 'Kiválasztva: {count} kártyás kazamata',
        'game.emptyDeck': 'Üres pakli',
        'game.deckSizeMismatch': 'A pakli és a kazamata kártyáinak száma meg kell egyezzen',
        'game.saveDeckError': 'Hiba történt a pakli mentése során',
        'game.deckReordered': 'Pakli sorrend megváltoztatva',
        'game.deckFull': 'A pakli maximum 6 kártyát tartalmazhat',
        'game.cardInDeck': 'Ez a kártya már a pakliban van',
        'game.cardAdded': 'Kártya hozzáadva a paklihoz ({pos}. pozíció)',
        'game.cardRemoved': 'Kártya eltávolítva a pakliból',
        'game.noCardsAssigned': 'A játékmester még nem rendelt hozzád kártyákat!',
        'game.allCardsInDeck': 'Minden kártyád a pakliban van!',
        'game.deckEmptySave': 'A pakli üres, adj hozzá legalább 1 kártyát',
        'game.deckSizeInvalid': 'A pakli 1, 4 vagy 6 kártyából kell álljon',
        'game.confirmRefresh': 'A pakli módosításai el fognak veszni. Biztos szeretnél frissíteni?',
        'game.refreshingCards': 'Kártyák frissítése...',
        'game.missingWorldId': 'Adj meg world_id-t az URL-ben',
        'game.startingFight': 'Harc indítása...',
        'game.youWon': 'GYŐZTÉL!',
        'game.youLost': 'VESZTETTÉL',
        'game.dungeonWon': 'KAZAMATA GYŐZÖTT',
        'game.clickToContinue': 'Kattints a folytatáshoz',
        'game.victory': 'GYŐZELEM!',
        'game.defeat': 'VERESÉG',
        'game.clickAnywhere': 'Kattints akárhova a folytatáshoz',
        'game.joinedWorld': 'Csatlakozva a világhoz',
        'game.reason.damage': 'Sebzés',
        'game.reason.type': 'Típus',
        'game.reason.dungeon_fallback': 'Egyenlő erejű kártyák',
        'game.reason': 'Ok',
        'game.round': 'Kör',
        'game.type.fire': 'Tűz',
        'game.type.water': 'Víz',
        'game.type.earth': 'Föld',
        'game.type.air': 'Levegő',
        'game.cardCount.one': '{count} kártya',
        'game.cardCount.other': '{count} kártya',
        
        
        'world.title': 'Világ létrehozása',
        'world.home': 'Kezdőlap',
        'world.save': 'Mentés',
        'world.cancel': 'Mégse',
        'world.worldName': 'Világ neve:',
        'world.worldNamePlaceholder': 'Add meg a világ nevét',
        'world.mapSize': 'Térkép mérete:',
        'world.players': 'Játékosok száma:',
        'world.difficulty': 'Nehézség:',
        'world.easy': 'Könnyű',
        'world.medium': 'Közepes',
        'world.hard': 'Nehéz',
        'world.terrain': 'Terep típusa:',
        'world.grass': 'Fű',
        'world.forest': 'Erdő',
        'world.desert': 'Sivatag',
        'world.snow': 'Hó',
        'world.mountain': 'Hegy',
        'world.water': 'Víz',
        'world.saved': 'Világ sikeresen mentve',
        'world.error': 'Hiba történt a világ mentése során',
        'world.loading': 'Világ adatok betöltése...',
        'world.creating': 'Új világ létrehozása...',
        'world.editing': 'Világ szerkesztése...',
        
        
        'common.loading': 'Betöltés...',
        'common.error': 'Hiba',
        'common.success': 'Sikeres',
        'common.confirm': 'Megerősítés',
        'common.cancel': 'Mégse',
        'common.save': 'Mentés',
        'common.delete': 'Törlés',
        'common.edit': 'Szerkesztés',
        'common.close': 'Bezárás',
        'common.yes': 'Igen',
        'common.no': 'Nem',
    }
};


const i18n = {
    currentLanguage: localStorage.getItem('language') || 'en',
    
    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
            this.updatePageLanguage();
        }
    },
    
    translate(key) {
        return translations[this.currentLanguage][key] || key;
    },
    
    updatePageLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            
            if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email' || element.type === 'password')) {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                }
            } else if (element.classList.contains('button-text')) {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.translate(key);
        });
        
        
        const titleElement = document.querySelector('title[data-i18n]');
        if (titleElement) {
            titleElement.textContent = this.translate(titleElement.getAttribute('data-i18n'));
        }
        
        
        document.documentElement.lang = this.currentLanguage;
    },
    
    init() {
        this.updatePageLanguage();
        
        
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            this.updateToggleDisplay();
            langToggle.addEventListener('click', () => {
                const newLang = this.currentLanguage === 'en' ? 'hu' : 'en';
                this.setLanguage(newLang);
                this.updateToggleDisplay();
            });
        }
    },
    
    updateToggleDisplay() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.setAttribute('data-lang', this.currentLanguage);
        }
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}