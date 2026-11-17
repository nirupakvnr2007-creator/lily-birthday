import type { ProtectedBirthdayContent } from '../src/types/birthday.ts';

export function getProtectedContent(
  hasPhoto: boolean,
  audioAvailability: Record<string, boolean> = {},
): ProtectedBirthdayContent {
  return {
    recipientName: 'Rithika (Lily)',
    heroHeading: 'Happy 20th Birthday, Lily!',
    heroSubheading:
      'A little corner of the internet for Rithika, my Lily—made with lots of love, memories and appreciation for you.',
    giftMessage:
      'Surprise, Rithika! Someone has made a little world just for you. Welcome to your 20th birthday surprise!',
    timeline: [
      {
        id: 'beginning',
        index: '01',
        eraLabel: '9th Standard · Online Class',
        title: 'The Fleeting Glance',
        story:
          'Our journey began with a fleeting glance during a 9th-standard online class—that was the very first time I saw your face and heard your name.',
        motif: 'microphone',
      },
      {
        id: 'first-impression',
        index: '02',
        eraLabel: '10th Standard · In Real Life',
        title: 'The First Impression',
        story:
          'It was not until 10th standard that we met in real life, and my first impression of you was set. Back then, I was highly inquisitive and talked endlessly, while you were incredibly quiet, usually replying with just a single word.',
        motif: 'desk',
      },
      {
        id: 'blossoming',
        index: '03',
        eraLabel: '11th Standard',
        title: 'When Everything Shifted',
        story:
          'Everything shifted in 11th standard when you began reciprocating, and our friendship truly blossomed.',
        motif: 'spark',
      },
      {
        id: 'bookworm-era',
        index: '04',
        eraLabel: '11th & 12th Standard',
        title: 'Deep Conversations & Books',
        story:
          'Throughout 11th and 12th standard, our bond thrived on deep, intellectual conversations—alongside your habit of finishing English books long before the teacher finished the portions.',
        motif: 'books',
      },
      {
        id: 'nakshatras',
        index: '05',
        eraLabel: 'Chitra & Vishakha · INFJ & INFP',
        title: 'Natural Counterparts',
        story:
          'Our connection is perfectly balanced, much like our Nakshatras. With your Nakshatra being Chitra and mine being Vishakha, we are natural counterparts, sharing the exact same animal symbol.',
        motif: 'stars',
      },
      {
        id: 'personal-feelings',
        index: '06',
        eraLabel: 'The Temple of Learning',
        title: 'Sharing Our Most Personal Feelings',
        story:
          'Over time, we evolved from sharing intellectual thoughts to sharing our most personal feelings. I will never forget how much you appreciated my quote: "I want a place near the God at the temple of learning"—where "God" secretly meant my person.',
        motif: 'philosophy',
      },
      {
        id: 'rajism-2025',
        index: '07',
        eraLabel: '2025 · The Unforgettable Coincidence',
        title: 'Discovering "Rajism"',
        story:
          'Then came 2025, the year we discovered "Rajism." We both loved people who shared the exact same date of birth, and both of their names contained the word "Raj." Even though neither of those people is in our lives right now, that shared experience became uniquely ours.',
        motif: 'coincidence',
      },
      {
        id: 'one-meetup',
        index: '08',
        eraLabel: 'After School',
        title: 'Our One Meetup',
        story:
          'Meeting after school at the temple. Only one meetup outside, yet one that left a warm, lasting memory alongside every conversation we have ever shared.',
        motif: 'temple',
      },
      {
        id: 'present',
        index: '09',
        eraLabel: 'Today · Turning 20',
        title: 'Rithika, My Lily',
        story:
          'Today, there is absolutely nothing I wouldn’t share with you. You are Rithika, my Lily—and I am so excited for everything ahead, especially next year.',
        motif: 'horizon',
      },
    ],
    polaroid: {
      title: 'One Picture. A Thousand Little Memories.',
      caption:
        "Maybe we don't have hundreds of pictures together, but this one holds a special place in my little collection of memories.",
      storyTitle: 'Behind This Frame',
      storyText:
        'From a fleeting glance in a 9th-standard online class to 10th-standard single-word replies, from 11th and 12th standard deep conversations to 2025’s Rajism—this single treasured photograph holds years of friendship inside one frame.',
      dateNote: 'Kept safely for Rithika (Lily) · 20th Birthday Archive',
      hasPhoto,
    },
    awards: [
      {
        id: 1,
        title: 'The Walking Encyclopedia Award',
        category: 'Intellect & Trivia',
        explanation:
          'Awarded for casually knowing things most people have to search twice—and explaining them with calm effortless clarity.',
      },
      {
        id: 2,
        title: 'The English Literature Champion Award',
        category: 'Academic Legend',
        explanation:
          'For finishing English textbooks and stories long before the teacher even finished the portions.',
      },
      {
        id: 3,
        title: 'The Certified Bookworm Award',
        category: 'Lifetime Reader',
        explanation:
          'Recognising an unmatched love for English books, quiet pages, and thoughtful storytelling.',
      },
      {
        id: 4,
        title: 'The Philosophy Department Head Award',
        category: '11th & 12th Std Talks',
        explanation:
          'For turning 11th and 12th standard into unforgettable seminars on psychology, life, and Stoicism.',
      },
      {
        id: 5,
        title: 'The Most Intellectual Human Award',
        category: 'Honors Distinction',
        explanation:
          'For evolving effortlessly from one-word 10th-standard replies to the sharpest, deepest mind in every conversation.',
      },
      {
        id: 6,
        title: 'The INFJ Queen Award',
        category: 'Chitra Counterpart',
        explanation:
          'Official recognition for rare INFJ intuition and Chitra Nakshatra balance—the natural counterpart to Vishakha.',
      },
      {
        id: 7,
        title: 'The Rajism Co-Founder Award',
        category: 'Class of 2025',
        explanation:
          'Awarded for co-discovering Rajism in 2025 after realizing both of our people shared the exact same birthday and the name "Raj."',
      },
      {
        id: 8,
        title: 'The Future Model Award',
        category: 'Grace & Poise',
        explanation:
          'Celebrating your natural poise, care for yourself, and effortless presence.',
      },
      {
        id: 9,
        title: 'The Most Irreplaceable Friend Award',
        category: 'Rithika, My Lily',
        explanation:
          'Because today, there is genuinely nothing I wouldn’t share with you.',
      },
      {
        id: 10,
        title: 'The Lifetime Friendship Award',
        category: 'Permanent Distinction',
        explanation:
          'Valid from a 9th-standard online class through turning 20 and every year still to come.',
      },
    ],
    conversation: {
      title: 'Conversation Corner',
      disclaimer:
        'A recreation of the 2025 "Rajism" realization moment between Nirupa and Rithika.',
      contactName: 'Rithika (Lily)',
      contactSubtitle: 'Chitra · INFJ · Rajism Co-Founder',
      stageNote: '(Both left in complete shock)',
      messages: [
        {
          id: 'm1',
          sender: 'friend',
          text: "I have to tell you something... I'm into someone named Raj.",
          timeLabel: 'Nirupa · 2025',
        },
        {
          id: 'm2',
          sender: 'lily',
          text: "Wait... I'm into a Raj too.",
          timeLabel: 'Rithika · 2025',
        },
        {
          id: 'm3',
          sender: 'friend',
          text: 'His birthday is on 6 Sept 1990.',
          timeLabel: 'Nirupa · 2025',
        },
        {
          id: 'm4',
          sender: 'lily',
          text: "Are you serious? My Raj's birthday is 6 Sept 1990 too!",
          timeLabel: 'Rithika · 2025',
        },
      ],
      replyOptions: [
        {
          id: 'r1',
          lilyText: 'And that is officially how Rajism was born in 2025.',
          friendResponse:
            'Out of every coincidence in the universe, two Rajs with the exact same birthday was peak comedy and destiny.',
        },
        {
          id: 'r2',
          lilyText: 'Neither of them is around now, yet the story is still ours.',
          friendResponse:
            'Always ours! The people came and went, and our friendship stayed stronger than ever.',
        },
      ],
    },
    timeCapsule: {
      title: 'A Little Time Capsule From Our School Days',
      salutation: 'Dear Rithika (my Lily),',
      paragraphs: [
        'If someone had told me during that fleeting glance in our 9th-standard online class—or back in 10th standard when I talked endlessly and you replied with a single word—that we would become this close, I probably wouldn’t have believed them.',
        'Everything changed in 11th standard when you started reciprocating, opening the door to two years of deep intellectual conversations, psychology, Stoicism, Chitra & Vishakha, and eventually 2025’s Rajism.',
        'I still remember how much you appreciated my line, "I want a place near the God at the temple of learning." Today, there is truly nothing I wouldn’t share with you.',
      ],
      signOff: 'Always your friend, Nirupa (INFP, Vishakha)',
    },
    quiz: {
      title: 'How Well Do You Remember Us?',
      subtitle: 'Seven quick memories from 9th standard all the way to 2025.',
      questions: [
        {
          id: 'q1',
          question: 'When did I catch my very first fleeting glance of your face and hear your name?',
          options: [
            '9th-standard online class',
            '12th-standard farewell',
            'Chemistry lab',
            'Sports day',
          ],
          correctAnswer: '9th-standard online class',
          feedbackCorrect:
            'Yes! Just a fleeting glance during a 9th-standard online class—before we even met in person in 10th.',
          feedbackWrong:
            'It actually goes all the way back to a 9th-standard online class—before we met in real life in 10th standard!',
        },
        {
          id: 'q2',
          question: 'How did you usually reply to my endless questions in 10th standard?',
          options: [
            'With a single word',
            'With a five-page essay',
            'With a voice note',
            'With a Stoic quote',
          ],
          correctAnswer: 'With a single word',
          feedbackCorrect:
            'Incredibly quiet and usually just one word—until 11th standard when everything shifted!',
          feedbackWrong:
            'Usually just a single word while I talked endlessly—until 11th standard when our friendship blossomed!',
        },
        {
          id: 'q3',
          question: 'What philosophy did we love discussing in 11th and 12th standard?',
          options: ['Stoicism', 'Nihilism', 'Hedonism', 'Minimalism'],
          correctAnswer: 'Stoicism',
          feedbackCorrect:
            'Yes—deep intellectual talks on Stoicism, psychology, and how minds work.',
          feedbackWrong:
            'It was Stoicism—right alongside psychology and all our deep 11th and 12th standard talks.',
        },
        {
          id: 'q4',
          question: 'What was our 2025 coincidence theory called?',
          options: ['Rajism', 'Lilysm', 'Chitraism', 'Chapterism'],
          correctAnswer: 'Rajism',
          feedbackCorrect:
            'Rajism! Two people named Raj sharing the exact same date of birth.',
          feedbackWrong:
            'Rajism—discovered in 2025 over the exact same birthday and the name Raj!',
        },
        {
          id: 'q5',
          question: 'Which Nakshatra is yours (sharing the same animal symbol as mine)?',
          options: ['Chitra', 'Rohini', 'Ashwini', 'Revati'],
          correctAnswer: 'Chitra',
          feedbackCorrect:
            'Chitra—the natural counterpart to Vishakha, sharing the exact same animal symbol.',
          feedbackWrong:
            'Yours is Chitra, balanced perfectly with my Vishakha!',
        },
        {
          id: 'q6',
          question: 'What are our personality types (yours and mine)?',
          options: ['INFJ & INFP', 'ESTJ & ENTP', 'ISTJ & ESFP', 'INTJ & ENFJ'],
          correctAnswer: 'INFJ & INFP',
          feedbackCorrect:
            'INFJ (you) and INFP (me)—quiet, intuitive counterparts.',
          feedbackWrong:
            'INFJ and INFP—which explains why our conversations always felt so deeply balanced.',
        },
        {
          id: 'q7',
          question: 'Where did we meet that one time after school?',
          options: ['Temple', 'Shopping mall', 'Railway station', 'Ice cream parlour'],
          correctAnswer: 'Temple',
          feedbackCorrect:
            'At the temple after school—quiet, peaceful, and forever remembered.',
          feedbackWrong:
            'It was at the temple after school—just one meetup, yet unforgettable.',
        },
      ],
      closingMessage:
        'Whether you scored 7 out of 7 or smiled through every question, from 9th standard to 2025, every single detail of us is precious to me.',
    },
    playlist: {
      title: 'A Soundtrack for a Special Tree',
      subtitle:
        'Michele Morrone selections for your birthday—and "Hard For Me" plays automatically in the background when you cut your birthday cake below.',
      tracks: [
        {
          id: 't1',
          title: 'Hard For Me',
          subtitle: 'Michele Morrone · Cake-Cutting Track',
          caption: 'Plays in the background when the birthday cake is cut.',
          durationSec: 52,
          mood: 'dreamy',
          hasAudioFile: Boolean(audioAvailability.t1),
        },
        {
          id: 't2',
          title: 'Beautiful',
          subtitle: 'Michele Morrone',
          caption: 'For your calm poise, quiet strength, and everything you are.',
          durationSec: 48,
          mood: 'reflective',
          hasAudioFile: Boolean(audioAvailability.t2),
        },
        {
          id: 't3',
          title: 'Watch Me Burn',
          subtitle: 'Michele Morrone',
          caption: 'Bold, unforgettable, and made for stepping into twenty.',
          durationSec: 50,
          mood: 'warm',
          hasAudioFile: Boolean(audioAvailability.t3),
        },
      ],
    },
    universe: {
      title: "In a Universe Full of People, I'm Glad I Met You.",
      subtitle:
        'Click any star in Lily’s sky to read a note kept especially for your 20th birthday.',
      messages: [
        {
          id: 'u1',
          constellation: 'Mind & Curiosity',
          message: 'Your mind is one of your most beautiful qualities.',
          note: 'Few people pair quietness with such genuine depth and curiosity.',
        },
        {
          id: 'u2',
          constellation: 'Chitra & Vishakha',
          message: 'Natural counterparts in every quiet way.',
          note: 'Sharing the exact same animal symbol—balanced from school days onward.',
        },
        {
          id: 'u3',
          constellation: 'Pages & Growth',
          message: 'Keep reading, growing and becoming.',
          note: 'From finishing English stories early to building your whole future.',
        },
        {
          id: 'u4',
          constellation: 'Ambition',
          message: "You deserve every beautiful thing you're working towards.",
          note: 'Your discipline, self-care, and quiet focus will take you everywhere you wish to go.',
        },
        {
          id: 'u5',
          constellation: 'Rithika, My Lily',
          message: 'There is absolutely nothing I wouldn’t share with you.',
          note: 'Health for you, wellbeing for your family, and peaceful days ahead.',
        },
      ],
    },
    newspaper: {
      masthead: 'THE LILY TIMES',
      editionLine: 'BIRTHDAY SPECIAL EDITION · VOL. XX · EST. 18 NOVEMBER 2006 · 20TH YEAR',
      mainHeadline: 'BREAKING NEWS! LOCAL BOOKWORM TURNS 20!',
      subHeadline: 'Experts confirm: intelligence levels continue to rise.',
      leadBody: [
        'Archives from 9th-standard online classes through 11th and 12th standard confirm that Rithika—affectionately known as Lily—has evolved from offering single-word replies in 10th standard to delivering some of the sharpest philosophical and psychological discussions on record.',
        'Observers recall her unmatched streak of finishing English literature books ahead of schedule, as well as her appreciation for the famous campus quote: "I want a place near the God at the temple of learning."',
      ],
      specialReportTitle: 'SPECIAL REPORT: RAJISM DISCOVERED IN 2025.',
      specialReportBody:
        'Investigative desks confirm that in 2025, Nirupa and Rithika uncovered an extraordinary shared coincidence: two people named Raj sharing the exact same date of birth. Though neither Raj remains in their lives today, Rajism endures as a permanent cultural landmark.',
      personOfYear: {
        name: 'Rithika "Lily" (20 Today)',
        citation:
          'Honoured unanimously for Chitra-Vishakha balance, unmatched composure, INFJ intuition, and being an irreplaceable friend.',
      },
      anticipatedEvent: {
        title: 'Next Year’s Anticipated Reunion',
        detail:
          'Editorial desks are already counting down the months until Rithika joins next year—an occasion described by friends as "genuinely long overdue."',
      },
      exclusiveWishes: [
        'Uninterrupted peace of mind and proud milestones in every ambition.',
        'Infinite captivating English novels with zero spoilers.',
        'Warmth, good health, and happiness for you and your whole family.',
      ],
      horoscope: {
        disclaimer: 'Entertainment Horoscope · Written Purely for Fun',
        lilySign: 'Chitra · INFJ Forecast',
        lilyForecast:
          'Year 20 brings sharp clarity, rewarding hard work, effortless grace, and the unwavering loyalty of your Vishakha counterpart.',
        friendNote:
          'Vishakha · INFP Cross-Reference: Same animal symbol, same wavelength, celebrating twenty properly.',
      },
    },
    letter: {
      title: 'A Letter I Really Wanted You to Read',
      subtitle:
        'Seven chapters—take all the time you like, at your own pace.',
      chapters: [
        {
          number: 1,
          title: 'The Beginning',
          kicker: 'Chapter One · 9th & 10th Standard',
          paragraphs: [
            'Our journey began with a fleeting glance during a 9th-standard online class—that was the very first time I saw your face and heard your name. Funny how one tiny moment on a screen can stay remembered years later.',
            'It wasn’t until 10th standard that we met in real life, and my first impression of you was set. Back then, I was highly inquisitive and talked endlessly, while you were incredibly quiet, usually replying with just a single word. Yet even in your quietness, there was a calm focus that stood out right away.',
          ],
        },
        {
          number: 2,
          title: 'The Girl Who Knows Everything',
          kicker: 'Chapter Two · 11th & 12th Standard',
          paragraphs: [
            'Everything shifted in 11th standard when you began reciprocating, and our friendship truly blossomed. Suddenly, those single-word replies turned into conversations I looked forward to every single day.',
            'Throughout 11th and 12th standard, our bond thrived on deep, intellectual conversations—alongside watching you finish entire English books and stories long before the teacher even finished the portions. Talking to you has always felt like discovering a sharper, calmer way of seeing the world.',
          ],
        },
        {
          number: 3,
          title: 'Our Little World',
          kicker: 'Chapter Three · Psychology, Stoicism & Rajism',
          paragraphs: [
            'Over time, we evolved from sharing intellectual thoughts—psychology, philosophy, and Stoicism—to sharing our most personal feelings. I will never forget how much you appreciated my quote: "I want a place near the God at the temple of learning"—where "God" secretly meant my person.',
            'Then came 2025, the year we discovered "Rajism." The secret behind it was a coincidence almost too strange to believe: we both loved people who shared the exact same date of birth, and both of their names contained the word "Raj." Even though neither of those people is in our lives right now, that shared experience became uniquely ours.',
          ],
        },
        {
          number: 4,
          title: 'Natural Counterparts',
          kicker: 'Chapter Four · Chitra, Vishakha, INFJ & INFP',
          paragraphs: [
            'Our connection feels perfectly balanced, much like our Nakshatras. With your Nakshatra being Chitra and mine being Vishakha, we are natural counterparts, sharing the exact same animal symbol.',
            'Paired with you being an INFJ and me being an INFP, it makes complete sense why we understand each other with so little explaining. Today, there is absolutely nothing I wouldn’t share with you. You are Rithika, my Lily.',
          ],
        },
        {
          number: 5,
          title: 'Someone I Truly Admire',
          kicker: 'Chapter Five · Gratitude & Wishes',
          paragraphs: [
            'We have only met once outside—that time at the temple after school—yet even one meeting was enough to leave a memory I still smile thinking about. I admire so much about you: not just your intelligence and calm wisdom, but the way you carry yourself, care for yourself, and stay grounded in your ambitions.',
            'As you step into 20, I genuinely wish you happiness that lingers, good health, peace and wellbeing for your family, and success in every single goal you are quietly working towards.',
          ],
        },
        {
          number: 6,
          title: 'Something I Owe You',
          kicker: 'Chapter Six · An Honest Apology',
          paragraphs: [
            'Before turning the page forward, there is something I honestly owe you. I am sorry for being on and off in our friendship at times—for the stretches where I went quiet or felt distant.',
            'Sometimes when life gets overwhelming, I struggle to communicate properly and end up pulling back because I never want to burden you. It was never a lack of care for you—you have always mattered to me more than my quiet phases ever showed.',
          ],
        },
        {
          number: 7,
          title: 'Until Next Year',
          kicker: 'Chapter Seven · Looking Forward',
          paragraphs: [
            'That is also why next year means so much to me. Knowing there is a chance of you joining and having you around next year genuinely excites me more than I can put into words.',
            'Until then, keep being curious, keep reading, keep taking care of yourself, and never doubt that someone out here is cheering wholeheartedly for you. Happy 20th Birthday, Rithika—my Lily. I really want you by my side.',
          ],
        },
      ],
    },
    finale: {
      heading: 'Happy 20th Birthday, Lily! ❤️',
      paragraphs: [
        "May your mind always remain curious, your heart remain peaceful, and your life become everything you've dreamed of.",
        "Here's to more conversations, more memories, more laughter, and hopefully many more years of friendship.",
        "I'm waiting for next year. I really want you by my side.",
      ],
      closingLine: 'Twenty looks wonderful on you already, Rithika.',
      oneMoreThingText:
        'Thank you for being my friend. Today, there is nothing I wouldn’t share with you—you are Rithika, my Lily.',
    },
  };
}
