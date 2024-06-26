
export class UserDataDTO {
    public userData: DataResponse;
    public vacData: VacResponse;
    public countryCode: string;
    public xCached?: boolean;
    public xGeo?: string;
}

// https://developer.valvesoftware.com/wiki/Steam_Web_API#GetPlayerSummaries_.28v0002.29
export class DataResponse {
    public SteamId: string;
    public communityvisibilitystate: SteamVisibleStates;
    public profilestate?: 1;
    public personaname: string;
    public commentpermission: number;
    public profileurl: string;
    public avatar: string;
    public avatarmedium: string;
    public avatarfull: string;
    public avatarhash: string;
    public personastate: SteamPersonaStates;
    public realname: string;
    public primaryclanid: string;
    public timecreated: number;
    public personastateflags: number;
    public gameserverip: string;
    public gameserversteamid: string;
    public gameextrainfo: string;
    public gameid: string;
    public loccountrycode: string;
    public locstatecode: string;
    public loccityid: number;
  }

  
//   1 - the profile is not visible to you (Private, Friends Only, etc), 3 - the profile is "Public", and the data is visible.
export enum SteamVisibleStates {
    PRIVATE = 1,
    PUBLIC = 3,
  }
  
  // 0 - Offline, 1 - Online, 2 - Busy, 3 - Away, 4 - Snooze, 5 - looking to trade, 6 - looking to play.
  export enum SteamPersonaStates {
    OFFLINE = 0,
    ONLINE = 1,
    BUSY = 2,
    AWAY = 3,
    SNOOZE = 4,
    LOOKING_TRADE = 5,
    LOOKING_PLAY = 6
  }
  
  export class VacResponse {
    public SteamId: string;
    public CommunityBanned: boolean;
    public VACBanned: boolean;
    public NumberOfVACBans: number;
    public DaysSinceLastBan: number;
    public NumberOfGameBans: number;
    public EconomyBan: string;
  }
  
  export class PluginData {
    id: string;
    name: string;
    author: string;
    file: string;
    size: string;
    time: string;
    version: string;
    loaded: boolean;
    loading: boolean;
  }
