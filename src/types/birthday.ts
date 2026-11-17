export interface TimelineChapter {
  id: string;
  index: string;
  eraLabel: string;
  title: string;
  story: string;
  motif: 'microphone' | 'desk' | 'books' | 'spark' | 'philosophy' | 'stars' | 'coincidence' | 'temple' | 'horizon';
}

export interface PolaroidData {
  title: string;
  caption: string;
  storyTitle: string;
  storyText: string;
  dateNote: string;
  hasPhoto: boolean;
}

export interface FriendshipAward {
  id: number;
  title: string;
  category: string;
  explanation: string;
}

export interface ChatMessage {
  id: string;
  sender: 'friend' | 'lily';
  text: string;
  timeLabel: string;
}

export interface ChatReplyOption {
  id: string;
  lilyText: string;
  friendResponse: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  feedbackCorrect: string;
  feedbackWrong: string;
}

export interface PlaylistTrack {
  id: string;
  title: string;
  subtitle: string;
  caption: string;
  durationSec: number;
  mood: 'dreamy' | 'reflective' | 'warm' | 'celebration';
}

export interface UniverseMessage {
  id: string;
  constellation: string;
  message: string;
  note: string;
}

export interface NewspaperData {
  masthead: string;
  editionLine: string;
  mainHeadline: string;
  subHeadline: string;
  leadBody: string[];
  specialReportTitle: string;
  specialReportBody: string;
  personOfYear: {
    name: string;
    citation: string;
  };
  anticipatedEvent: {
    title: string;
    detail: string;
  };
  exclusiveWishes: string[];
  horoscope: {
    disclaimer: string;
    lilySign: string;
    lilyForecast: string;
    friendNote: string;
  };
}

export interface LetterChapter {
  number: number;
  title: string;
  kicker: string;
  paragraphs: string[];
}

export interface FinaleData {
  heading: string;
  paragraphs: string[];
  closingLine: string;
  oneMoreThingText: string;
}

export interface ProtectedBirthdayContent {
  recipientName: string;
  heroHeading: string;
  heroSubheading: string;
  giftMessage: string;
  timeline: TimelineChapter[];
  polaroid: PolaroidData;
  awards: FriendshipAward[];
  conversation: {
    title: string;
    disclaimer: string;
    contactName: string;
    contactSubtitle: string;
    messages: ChatMessage[];
    replyOptions: ChatReplyOption[];
  };
  timeCapsule: {
    title: string;
    salutation: string;
    paragraphs: string[];
    signOff: string;
  };
  quiz: {
    title: string;
    subtitle: string;
    questions: QuizQuestion[];
    closingMessage: string;
  };
  playlist: {
    title: string;
    subtitle: string;
    tracks: PlaylistTrack[];
  };
  universe: {
    title: string;
    subtitle: string;
    messages: UniverseMessage[];
  };
  newspaper: NewspaperData;
  letter: {
    title: string;
    subtitle: string;
    chapters: LetterChapter[];
  };
  finale: FinaleData;
}
