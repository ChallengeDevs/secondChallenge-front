export namespace Models {

  export interface Events {
    events: Game[]  
  }

  export interface Game {
    id: number
    name: string
    competitions: Competition[]
    status: Status
    link: Link[]
  }

  export interface Competition {
    id: number
    date: Date
    attendance: number
    venue: {
      id: number
      fullName: string
      indoor: boolean
      capacity: number
      address: {
        city: string
        state: string
      }
    }
    competitors: Competitors[]
  }

  export interface Link {
    href: string
    isExternal: boolean
    isPremium: boolean
    language: "en-US" | "pt-BR"
    shortText: string
    text: string
  }

  export interface Status {
    clock: number
    displayClock: string
    period: number
    type: {
      completed: boolean
      description: string
      detail: string
      id: number
      name: string
      shortDetail: string
      state: string
    }
  }

  export interface Competitors {
    id: number
    homeAway: string
    team: {
      id: number
      location: string
      logo: string
      abbreviation: string
      color: string
      alternateColor: string
      displayName: string
      name: string
      shortDisplayName: string
    }
    score: string
    records: {
      name: string
      abbreviation: string
      type: string
      summary: string
    }[]
    statistics: {
      name: string
      abbreviation: string
      displayValue: number
      rankDisplayValue: string
    }[]
  }

  export interface Leagues {
    id: number
    uid: string
    name: string
    abbreviation: string
    logos: Logos[]
    slug: string
    season: {
      year: number
      startDate: Date
      endDate: Date
      displayName: string
      type: {
        id: number
        name: string
        type: number
        abbreviation: string
      }
    }
  }

  export interface Logos {
    href: string
    height: number
    width: number
    alt: string
    lastUpdated: Date
  }

  export interface Teams {
    team: {
      id: number
      displayName: string
      shortDisplayName: string
      nickname: string
      color: string
      alternateColor: string
      logos: Logos[]
      location: string
    }
  }

  export interface Event {
    event: Game
    teams?: Teams[]
  }
}