import type { ProtectedBirthdayContent } from '../src/types/birthday.ts';

export function getProtectedContent(
  audioAvailability: Record<string, boolean> = {},
): ProtectedBirthdayContent {
  return {
    recipientName: 'Rithika (Lily)',
    heroHeading: 'Happy 20th Birthday, Lily!',
    heroSubheading:
      'A little corner of the internet for Rithika, my Lily—made with lots of warmth, memories, and appreciation for you.',
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
          'It wasn’t until 10th standard that we met in real life, and my first impression of you was set. Back then, I was highly inquisitive and talked endlessly, while you were incredibly quiet, usually replying with just a single word.',
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
        eraLabel: 'Natural Balance',
        title: 'Chitra & Vishakha',
        story:
          'Our connection feels naturally balanced, much like our Nakshatras—Chitra and Vishakha—making us natural counterparts who even share the exact same animal symbol.',
        motif: 'stars',
      },
      {
        id: 'personal-feelings',
        index: '06',
        eraLabel: 'The Temple of Learning',
        title: 'Sharing Our Personal Feelings',
        story:
          'Over time, we evolved from sharing intellectual thoughts to sharing our most personal feelings. I will never forget how much you appreciated my quote: "I want a place near the God at the temple of learning"—where "God" secretly meant my person.',
        motif: 'philosophy',
      },
      {
        id: 'rajism-2025',
        index: '07',
        eraLabel: '2025 · Shared Coincidence',
        title: 'Discovering "Rajism"',
        story:
          'Then came 2025, the year we discovered "Rajism"—when we realized we both loved people sharing the exact same date of birth whose names both contained "Raj." Even though neither is in our lives right now, that memory became uniquely ours.',
        motif: 'coincidence',
      },
      {
        id: 'one-meetup',
        index: '08',
        eraLabel: 'After School',
        title: 'Our One Meetup',
        story:
          'Meeting after school at the temple—only one meetup outside, yet a quiet, lasting memory kept close.',
        motif: 'temple',
      },
      {
        id: 'present',
        index: '09',
        eraLabel: 'Today · Turning 20',
        title: 'Rithika, My Lily',
        story:
          'Today, there is absolutely nothing I wouldn’t share with you. Happy 20th birthday—and I cannot wait for next year.',
        motif: 'horizon',
      },
    ],
    awards: [
      {
        id: 1,
        title: 'The Walking Encyclopedia Award',
        category: 'Sharp Mind',
        explanation:
          'Awarded for casually knowing things most people have to look up twice—and explaining them effortlessly.',
      },
      {
        id: 2,
        title: 'The English Literature Champion Award',
        category: 'Academic Legend',
        explanation:
          'For finishing English textbooks and stories weeks before the syllabus ever caught up.',
      },
      {
        id: 3,
        title: 'The Certified Bookworm Award',
        category: 'Lifetime Reader',
        explanation:
          'Recognising an unmatched love for quiet pages, good stories, and always reading ahead.',
      },
      {
        id: 4,
        title: 'The Philosophy Department Head Award',
        category: 'Deep Talks',
        explanation:
          'For turning ordinary school afternoons into thoughtful seminars on life, psychology, and Stoicism.',
      },
      {
        id: 5,
        title: 'The Most Intellectual Human Award',
        category: 'Honors Distinction',
        explanation:
          'From one-word answers in 10th standard to the sharpest mind in every conversation since.',
      },
      {
        id: 6,
        title: 'The Quiet Intuition Award',
        category: 'Rare Insight',
        explanation:
          'Official recognition for perceptive intuition, calm wisdom, and understanding people without needing long explanations.',
      },
      {
        id: 7,
        title: 'The Rajism Co-Founder Award',
        category: 'Class of 2025',
        explanation:
          'For co-authoring the greatest accidental theory of 2025 over one unbelievable coincidence.',
      },
      {
        id: 8,
        title: 'The Future Model Award',
        category: 'Grace & Poise',
        explanation:
          'Celebrating your natural poise, self-care, and effortless presence.',
      },
      {
        id: 9,
        title: 'The Most Irreplaceable Friend Award',
        category: 'True Friendship',
        explanation:
          'Through quiet phases and busy seasons, nobody else could ever occupy the space you hold.',
      },
      {
        id: 10,
        title: 'The Lifetime Friendship Award',
        category: 'Permanent Distinction',
        explanation:
          'No expiration date—from school benches to turning twenty and everything waiting ahead.',
      },
    ],
    conversation: {
      title: 'Conversation Corner',
      disclaimer:
        'A recreation of the 2025 "Rajism" realization moment between Nirupa and Rithika.',
      contactName: 'Rithika (Lily)',
      contactSubtitle: 'Bookworm & Best Friend',
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
          lilyText: 'And that is officially how Rajism was born.',
          friendResponse:
            'Out of every coincidence in the universe, two Rajs with the exact same birthday was pure destiny.',
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
      salutation: 'Dear Rithika,',
      paragraphs: [
        'Back when I talked endlessly and you answered with a single word, I never could have guessed how effortlessly close we would become.',
        'Looking back at every quiet afternoon, every shared book, and every honest secret we traded along the way, those school days will always hold a special place for me.',
        'Keep this little note tucked safely away: no matter how fast our twenties move, I am endlessly grateful that our paths crossed.',
      ],
      signOff: 'Always your friend, Nirupa',
    },
    quiz: {
      title: 'How Well Do You Remember Us?',
      subtitle: 'Seven quick memories from school days to 2025.',
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
            'Spot on—just a fleeting glance in that 9th-standard online class!',
          feedbackWrong:
            'It actually goes back to a 9th-standard online class, before we met in person in 10th.',
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
            'Incredibly quiet and usually just one word—until 11th standard changed everything!',
          feedbackWrong:
            'Usually just a single word while I talked endlessly!',
        },
        {
          id: 'q3',
          question: 'What did you always finish long before the teacher completed the portions?',
          options: ['English books', 'Physics manuals', 'Bus timetables', 'Art journals'],
          correctAnswer: 'English books',
          feedbackCorrect:
            'Every single time—you read through those English stories weeks ahead of class.',
          feedbackWrong:
            'It was English books! You always read ahead simply because you loved the stories.',
        },
        {
          id: 'q4',
          question: 'What philosophy did we love discussing in 11th and 12th standard?',
          options: ['Stoicism', 'Nihilism', 'Hedonism', 'Minimalism'],
          correctAnswer: 'Stoicism',
          feedbackCorrect:
            'Yes—deep talks on Stoicism, psychology, and calm perspective.',
          feedbackWrong:
            'That one was Stoicism—right alongside psychology.',
        },
        {
          id: 'q5',
          question: 'What was our 2025 shared-birthday theory called?',
          options: ['Rajism', 'Lilysm', 'Chitraism', 'Chapterism'],
          correctAnswer: 'Rajism',
          feedbackCorrect:
            'Rajism! Born on the spot in 2025.',
          feedbackWrong:
            'It was Rajism—co-founded over 6 Sept 1990!',
        },
        {
          id: 'q6',
          question: 'Which pair are our Nakshatras (sharing the same animal symbol)?',
          options: [
            'Chitra & Vishakha',
            'Rohini & Ashwini',
            'Revati & Bharani',
            'Swati & Magha',
          ],
          correctAnswer: 'Chitra & Vishakha',
          feedbackCorrect:
            'Chitra and Vishakha—natural counterparts!',
          feedbackWrong:
            'Ours are Chitra and Vishakha—sharing the exact same animal symbol.',
        },
        {
          id: 'q7',
          question: 'Where did we meet that one time after school?',
          options: ['Temple', 'Shopping mall', 'Railway station', 'Ice cream parlour'],
          correctAnswer: 'Temple',
          feedbackCorrect:
            'At the temple after school—peaceful and unforgettable.',
          feedbackWrong:
            'It was at the temple after school.',
        },
      ],
      closingMessage:
        'Whether you scored 7 out of 7 or smiled your way through, every single one of these memories means the world to me.',
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
        'Click any star in Lily’s sky to read a wish kept especially for your 20th birthday.',
      messages: [
        {
          id: 'u1',
          constellation: 'Mind & Curiosity',
          message: 'Your mind is one of your most beautiful qualities.',
          note: 'Few people pair quietness with such genuine depth and curiosity.',
        },
        {
          id: 'u2',
          constellation: 'Quiet Strength',
          message: 'Never stop being curious.',
          note: 'The world gets richer every time you ask a thoughtful question.',
        },
        {
          id: 'u3',
          constellation: 'Pages & Growth',
          message: 'Keep reading, growing and becoming.',
          note: 'From finishing novels early to building a future you love.',
        },
        {
          id: 'u4',
          constellation: 'Ambition',
          message: "You deserve every beautiful thing you're working towards.",
          note: 'Your discipline, self-care, and quiet focus will carry you far.',
        },
        {
          id: 'u5',
          constellation: 'Gratitude',
          message: 'I hope life gives you countless reasons to smile.',
          note: 'Good health for you, peace for your family, and bright days ahead.',
        },
      ],
    },
    newspaper: {
      masthead: 'THE LILY TIMES',
      editionLine: 'BIRTHDAY SPECIAL EDITION · VOL. XX · EST. 18 NOVEMBER 2006 · 20TH YEAR',
      mainHeadline: 'BREAKING NEWS! LOCAL BOOKWORM TURNS 20!',
      subHeadline: 'Experts confirm: intelligence levels continue to rise.',
      leadBody: [
        'Local sources confirm that Rithika—known fondly as Lily—officially enters her twenties today with an unbeaten track record of finishing English literature books long before anyone else.',
        'Close friends note that while she once communicated primarily in single-word replies, she has since become one of the sharpest, most thoughtful conversationalists in town.',
      ],
      specialReportTitle: 'SPECIAL REPORT: RAJISM ARCHIVES SEALED.',
      specialReportBody:
        'In a shocking 2025 investigation, Nirupa and Rithika uncovered two separate individuals named Raj sharing the exact birthday of 6 Sept 1990. Though neither remains on the roster today, Rajism retains permanent historical status.',
      personOfYear: {
        name: 'Rithika "Lily" (20 Today)',
        citation:
          'Honoured unanimously for unmatched composure, sharp intellect, and being an irreplaceable friend.',
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
        lilySign: '20th Year Cosmic Forecast',
        lilyForecast:
          'Year 20 brings sharp clarity, rewarding hard work, effortless grace, and plenty of reasons to laugh.',
        friendNote:
          'Editorial Note: The stars strongly advise celebrating twenty properly with good music and cake.',
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
            'Then came 2025, the year we discovered "Rajism." The secret behind it was a coincidence almost too strange to believe: we both loved people who shared the exact same date of birth, 6 Sept 1990, and both of their names contained "Raj." Even though neither of those people is in our lives right now, that shared experience became uniquely ours.',
          ],
        },
        {
          number: 4,
          title: 'Natural Counterparts',
          kicker: 'Chapter Four · Understanding Each Other',
          paragraphs: [
            'Our connection feels perfectly balanced, much like our Nakshatras. With yours being Chitra and mine being Vishakha, we are natural counterparts, sharing the exact same animal symbol.',
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
