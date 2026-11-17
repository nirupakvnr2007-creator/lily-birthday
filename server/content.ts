import type { ProtectedBirthdayContent } from '../src/types/birthday.ts';

export function getProtectedContent(hasPhoto: boolean): ProtectedBirthdayContent {
  return {
    recipientName: 'Lily',
    heroHeading: 'Happy 20th Birthday, Lily!',
    heroSubheading:
      'A little corner of the internet, made with lots of love, memories and appreciation for you.',
    giftMessage:
      'Surprise, Lily! Someone has made a little world just for you. Welcome to your birthday surprise!',
    timeline: [
      {
        id: 'beginning',
        index: '01',
        eraLabel: '10th Standard · Online Class',
        title: 'The Beginning',
        story:
          'It started quietly in an online class, when the faculty asked you to read something aloud. Just one ordinary school moment—yet somehow that voice and calm presence stayed remembered.',
        motif: 'microphone',
      },
      {
        id: 'first-impression',
        index: '02',
        eraLabel: '12th Standard',
        title: 'The First Impression',
        story:
          'Seeing you in 12th standard, it was hard not to notice how quiet, reserved, and genuinely focused you were. While everything around school felt loud, you carried a steadiness of your own.',
        motif: 'desk',
      },
      {
        id: 'bookworm-era',
        index: '03',
        eraLabel: 'English Class',
        title: 'The Bookworm Era',
        story:
          'Your unmistakable habit of finishing the entire English book and its stories long before the teacher even finished the portions—reading ahead simply because you loved the words.',
        motif: 'books',
      },
      {
        id: 'getting-closer',
        index: '04',
        eraLabel: 'School & Beyond',
        title: 'Getting Closer',
        story:
          'Little by little, discovering how much you actually knew—and realizing that behind the quiet exterior was someone endlessly curious, sharp, and wonderful to talk to.',
        motif: 'spark',
      },
      {
        id: 'deeper-connection',
        index: '05',
        eraLabel: 'Our Late Talks',
        title: 'The Deeper Connection',
        story:
          'Hours spent wandering through psychology, philosophy, Stoicism, and of course our very own grand invented theory: Rajism.',
        motif: 'philosophy',
      },
      {
        id: 'understanding-each-other',
        index: '06',
        eraLabel: 'INFJ & INFP · Chithirai & Vishakam',
        title: 'Understanding Each Other',
        story:
          'INFJ meets INFP. Chithirai meets Vishakam. Somehow two quiet minds found a rare wavelength where half a thought was enough to be understood.',
        motif: 'stars',
      },
      {
        id: 'coincidences',
        index: '07',
        eraLabel: 'Strange & Special',
        title: 'The Unforgettable Coincidences',
        story:
          'And that uncanny shared birthday-date coincidence involving two different people—one of those little life details that feels almost too specific to be random.',
        motif: 'coincidence',
      },
      {
        id: 'one-meetup',
        index: '08',
        eraLabel: 'After School',
        title: 'Our One Meetup',
        story:
          'Meeting after school at the temple. Only one meetup, yet one that left a lasting, warm memory—proof that quality never needed quantity.',
        motif: 'temple',
      },
      {
        id: 'present',
        index: '09',
        eraLabel: 'Turning 20 · Looking Ahead',
        title: 'The Present & Next Year',
        story:
          'Today is all about celebrating you at 20—with genuine gratitude for who you are, an honest apology for the times I went quiet, and real excitement about you joining next year.',
        motif: 'horizon',
      },
    ],
    polaroid: {
      title: 'One Picture. A Thousand Little Memories.',
      caption:
        "Maybe we don't have hundreds of pictures together, but this one holds a special place in my little collection of memories.",
      storyTitle: 'Behind This Frame',
      storyText:
        'Some friendships have camera rolls overflowing with selfies; ours has quiet conversations, shared philosophies, one temple meetup after school, and a single treasured photograph that says more than a hundred casual snapshots ever could.',
      dateNote: 'Kept safely for Lily · 20th Birthday Archive',
      hasPhoto,
    },
    awards: [
      {
        id: 1,
        title: 'The Walking Encyclopedia Award',
        category: 'Intellect & Trivia',
        explanation:
          'Awarded for casually knowing things most people have to search twice—and explaining them like it is the easiest thing in the world.',
      },
      {
        id: 2,
        title: 'The English Literature Champion Award',
        category: 'Academic Legend',
        explanation:
          'For finishing the English textbook stories long before the teacher even reached chapter three. Zero competition.',
      },
      {
        id: 3,
        title: 'The Certified Bookworm Award',
        category: 'Lifetime Reader',
        explanation:
          'Recognising an unmatched dedication to English books, quiet pages, and always having another story half-finished.',
      },
      {
        id: 4,
        title: 'The Philosophy Department Head Award',
        category: 'Deep Thoughts',
        explanation:
          'For turning ordinary conversations into thoughtful seminars on life, human minds, and Stoicism without ever sounding pretentious.',
      },
      {
        id: 5,
        title: 'The Most Intellectual Human Award',
        category: 'Honors Distinction',
        explanation:
          'Because your mind is genuinely one of the sharpest, calmest, and most admirable minds I have ever known.',
      },
      {
        id: 6,
        title: 'The INFJ Queen Award',
        category: 'Personality Hall of Fame',
        explanation:
          'Official recognition for rare INFJ intuition, quiet depth, and somehow reading people better than they read themselves.',
      },
      {
        id: 7,
        title: 'The Rajism Co-Founder Award',
        category: 'Founding Fellow',
        explanation:
          'For co-authoring the greatest philosophical framework never yet published in an academic journal: Rajism.',
      },
      {
        id: 8,
        title: 'The Future Model Award',
        category: 'Grace & Poise',
        explanation:
          'Celebrating your natural poise, care for yourself, and effortless presence—future magazine covers are hereby warned.',
      },
      {
        id: 9,
        title: 'The Most Irreplaceable Friend Award',
        category: 'Friendship Honor',
        explanation:
          'Even through quiet stretches and busy seasons, nobody else occupies the space you hold in this friendship.',
      },
      {
        id: 10,
        title: 'The Lifetime Friendship Award',
        category: 'Permanent Distinction',
        explanation:
          'No expiration date. Valid from 10th standard online classes through twenty and every chapter waiting next year.',
      },
    ],
    conversation: {
      title: 'A Little Conversation Corner',
      disclaimer:
        'An illustrative scripted daydream inspired by our friendship—not copied from any real chat history.',
      contactName: 'Lily',
      contactSubtitle: 'INFJ · Bookworm & Rajism Co-Founder',
      messages: [
        {
          id: 'm1',
          sender: 'friend',
          text: 'Hey Lily, do you remember our online classes? 😂',
          timeLabel: '10th Std Memory',
        },
        {
          id: 'm2',
          sender: 'lily',
          text: 'Wait—the one where the faculty suddenly made me read aloud in front of everyone?',
          timeLabel: 'Just then',
        },
        {
          id: 'm3',
          sender: 'friend',
          text: 'The exact class where you got noticed for reading! Haha! And meanwhile you had probably already finished the entire English book.',
          timeLabel: '10th → 12th',
        },
        {
          id: 'm4',
          sender: 'friend',
          text: 'And somehow from there we ended up discussing psychology, Stoicism, and inventing Rajism.',
          timeLabel: 'Always',
        },
        {
          id: 'm5',
          sender: 'lily',
          text: 'Still waiting for the official Rajism textbook to be published, honestly.',
          timeLabel: 'Drafting',
        },
        {
          id: 'm6',
          sender: 'friend',
          text: 'Best accidental friendship ever. ❤️ Happy 20th Birthday, Lily.',
          timeLabel: 'Today',
        },
      ],
      replyOptions: [
        {
          id: 'r1',
          lilyText: 'Haha, I definitely had already read ahead in that English book.',
          friendResponse:
            'Knew it! Nobody stood a chance against your reading speed—still one of my favourite school memories.',
        },
        {
          id: 'r2',
          lilyText: 'Rajism really does deserve its own chapter, doesn’t it?',
          friendResponse:
            'Wait until you scroll down to The Lily Times—our research department has already issued a special report.',
        },
        {
          id: 'r3',
          lilyText: 'From online class to turning 20… time really flew.',
          friendResponse:
            'It really did. And next year is going to be even better when you are finally around more often.',
        },
      ],
    },
    timeCapsule: {
      title: 'A Little Time Capsule From Our School Days',
      salutation: 'Dear Lily,',
      paragraphs: [
        'If someone had told me during those school days that one online class would eventually lead to a friendship like this, I probably wouldn’t have believed them.',
        'Back then, you were the quiet, focused girl who finished her English stories weeks ahead of everyone else—someone I admired from afar before we ever traded theories on psychology, Stoicism, and Rajism.',
        'Keep this little time capsule tucked safely away: no matter how busy life gets or how many chapters pass, those school-day beginnings will always be one of my favourite stories.',
      ],
      signOff: 'Your school friend (INFP, Vishakam)',
    },
    quiz: {
      title: 'How Well Do You Remember Us?',
      subtitle: 'Seven quick little memories from our friendship—let us see how many you spot.',
      questions: [
        {
          id: 'q1',
          question: 'Which class made me notice you for the first time?',
          options: ['Online class', 'Chemistry lab', 'Sports period', 'Morning assembly'],
          correctAnswer: 'Online class',
          feedbackCorrect:
            'Spot on! That moment when the faculty asked you to read aloud in online class.',
          feedbackWrong:
            'Close guess, though it actually started in our online class when the faculty asked you to read aloud!',
        },
        {
          id: 'q2',
          question: 'What did you love reading ahead of everyone else?',
          options: ['English books', 'Physics manuals', 'Newspaper classifieds', 'Bus timetables'],
          correctAnswer: 'English books',
          feedbackCorrect:
            'Every single time—finished long before the teacher even reached the end of the portions.',
          feedbackWrong:
            'It was English books! You always finished the stories well before the rest of us got there.',
        },
        {
          id: 'q3',
          question: 'What philosophy did we love discussing together?',
          options: ['Stoicism', 'Nihilism', 'Hedonism', 'Minimalism'],
          correctAnswer: 'Stoicism',
          feedbackCorrect:
            'Yes—Stoicism, calm perspective, and dissecting how people think.',
          feedbackWrong:
            'That one was Stoicism! Our late talks always wandered back to calm minds and philosophy.',
        },
        {
          id: 'q4',
          question: 'What was our very own invented theory called?',
          options: ['Rajism', 'Lilysm', 'Stoic-Plus', 'Chapterism'],
          correctAnswer: 'Rajism',
          feedbackCorrect:
            'Rajism! Still under active philosophical development to this day.',
          feedbackWrong:
            'How could you forget Rajism?! Co-founded in our very own conversations.',
        },
        {
          id: 'q5',
          question: 'What is your personality type?',
          options: ['INFJ', 'ENTP', 'ISTJ', 'ESFP'],
          correctAnswer: 'INFJ',
          feedbackCorrect:
            'The rarest type—quiet, perceptive, thoughtful INFJ.',
          feedbackWrong:
            'You are an INFJ—quietly intuitive and deeply thoughtful.',
        },
        {
          id: 'q6',
          question: 'And what is my personality type?',
          options: ['INFP', 'ESTJ', 'INTJ', 'ENFJ'],
          correctAnswer: 'INFP',
          feedbackCorrect:
            'INFP! The dreamy counterpart to your INFJ clarity.',
          feedbackWrong:
            'Mine is INFP—which explains why our conversations always felt like two quiet minds matching wavelengths.',
        },
        {
          id: 'q7',
          question: 'Where did we meet that one time after school?',
          options: ['Temple', 'Shopping mall', 'Railway station', 'Ice cream parlour'],
          correctAnswer: 'Temple',
          feedbackCorrect:
            'At the temple after school—just one meetup, yet unforgettable.',
          feedbackWrong:
            'It was at the temple after school—peaceful, brief, and forever remembered.',
        },
      ],
      closingMessage:
        'Whether you scored 7 out of 7 or laughed your way through, every single one of these little details is a reason this friendship means so much to me.',
    },
    playlist: {
      title: 'A Soundtrack for Your Special Day',
      subtitle:
        'Four gentle instrumental pieces composed right inside this page—press play whenever you are ready for background music while reading.',
      tracks: [
        {
          id: 't1',
          title: 'Afternoon Pages',
          subtitle: 'Soft Music Box · F Major',
          caption: 'This one is for your peaceful, book-loving side.',
          durationSec: 48,
          mood: 'dreamy',
        },
        {
          id: 't2',
          title: 'Chithirai & Vishakam',
          subtitle: 'Warm Electric Piano · D Major',
          caption: 'For quiet evenings talking about psychology, stars, and Stoicism.',
          durationSec: 52,
          mood: 'reflective',
        },
        {
          id: 't3',
          title: 'Footsteps Outside the Temple',
          subtitle: 'Gentle Waltz · C Major',
          caption: 'For the simplicity of one real-world memory that stayed warm for years.',
          durationSec: 44,
          mood: 'warm',
        },
        {
          id: 't4',
          title: 'Twenty Candles for Lily',
          subtitle: 'Birthday Chime · G Major',
          caption: 'A soft birthday melody for everything bright waiting in your twenties.',
          durationSec: 56,
          mood: 'celebration',
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
          constellation: 'Wonder',
          message: 'Never stop being curious.',
          note: 'The world gets richer every time you ask a thoughtful question.',
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
          constellation: 'Happiness',
          message: 'I hope life gives you countless reasons to smile.',
          note: 'Health for you, wellbeing for your family, and peaceful days ahead.',
        },
      ],
    },
    newspaper: {
      masthead: 'THE LILY TIMES',
      editionLine: 'BIRTHDAY SPECIAL EDITION · VOL. XX · EST. 18 JUNE 2006 · 20TH YEAR',
      mainHeadline: 'BREAKING NEWS! LOCAL BOOKWORM TURNS 20!',
      subHeadline: 'Experts confirm: intelligence levels continue to rise.',
      leadBody: [
        'Sources close to the 10th-standard and 12th-standard archives report that Lily continues to amaze everyone around her with effortless knowledge, rapid English reading habits, and remarkably calm philosophical discussions.',
        'Witnesses recall an early online class reading assignment that first alerted observers to her quiet brilliance—followed swiftly by a streak of finishing entire literature books weeks before syllabus schedules.',
      ],
      specialReportTitle: 'SPECIAL REPORT: RAJISM STILL UNDER DEVELOPMENT.',
      specialReportBody:
        'Insiders confirm that while Stoicism remains the foundation, co-founders have not yet finalized Volume I of Rajism. Further late-night philosophical summits are expected upon her arrival next year.',
      personOfYear: {
        name: 'Lily (20 Today)',
        citation:
          'Honoured unanimously for unmatched composure, encyclopedic reading taste, INFJ intuition, and being an irreplaceable friend.',
      },
      anticipatedEvent: {
        title: 'Next Year’s Anticipated Reunion',
        detail:
          'Editorial desks are already counting down the months until Lily joins next year—an occasion described by friends as "genuinely long overdue."',
      },
      exclusiveWishes: [
        'Uninterrupted peace of mind and proud milestones in every ambition.',
        'Infinite captivating English novels with zero spoilers.',
        'Warmth, good health, and happiness for you and your whole family.',
      ],
      horoscope: {
        disclaimer: 'Entertainment Horoscope · Written Purely for Fun',
        lilySign: 'Chithirai · INFJ Forecast',
        lilyForecast:
          'Year 20 brings sharp clarity, rewarding hard work, effortless grace, and at least one suspiciously accurate birthday coincidence.',
        friendNote:
          'Vishakam · INFP Cross-Reference: Stars strongly advise keeping good friends close and celebrating twenty properly.',
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
          kicker: 'Chapter One · 10th & 12th Standard',
          paragraphs: [
            'If I trace this friendship all the way back to where my attention first caught onto you, it goes back to our school days—all the way to that online class when the faculty asked you to read something aloud. Funny how something so small and ordinary can stay tucked in someone’s memory for years.',
            'Later, seeing you in 12th standard, what struck me immediately was how quiet, reserved, and genuinely focused you were. You never needed to be the loudest person in the room to stand out. There was a steadiness about you—an academic dedication and calmness—that I respected right away.',
          ],
        },
        {
          number: 2,
          title: 'The Girl Who Knows Everything',
          kicker: 'Chapter Two · Books & Quiet Brilliance',
          paragraphs: [
            'One of my favourite things about you from school has always been how effortlessly well-read you are. While everyone else was still waiting for the syllabus to move forward, you had already finished the English books and stories on your own—not for marks, just because you genuinely loved reading.',
            'Getting to know you better meant discovering how vast your knowledge really is. Talking to you never feels shallow; you have a way of thinking through ideas, remembering details, and seeing nuances that makes every conversation feel like opening a good book.',
          ],
        },
        {
          number: 3,
          title: 'Our Little World',
          kicker: 'Chapter Three · Psychology, Stoicism & Rajism',
          paragraphs: [
            'Somewhere between casual school memories and real life, our conversations grew into a little world of their own. We went from everyday talk to psychology, philosophy, Stoicism, and how human minds carry themselves through hard days.',
            'And, of course, we invented Rajism—our own inside theory that nobody else in the world would quite understand the way we do. That is what makes talking to you feel so rare: we can laugh about our own ridiculous concepts in one breath and discuss Stoic resilience in the next.',
          ],
        },
        {
          number: 4,
          title: 'The Unusual Similarities',
          kicker: 'Chapter Four · INFJ, INFP & Coincidences',
          paragraphs: [
            'Sometimes it still surprises me how naturally our minds align. You being an INFJ and me being an INFP, Chithirai and Vishakam—it explains why conversations between us have always needed so little translating. You understand feelings without having them over-explained.',
            'Even the strange little coincidences—like that shared specific birthday date involving two different people—feel like quiet reminders that certain friendships are simply meant to cross paths and stay.',
          ],
        },
        {
          number: 5,
          title: 'Someone I Truly Admire',
          kicker: 'Chapter Five · Gratitude & Wishes',
          paragraphs: [
            'We have only met once outside—that time at the temple after school—yet even one meeting was enough to leave a memory I still smile thinking about. I admire so much about you: not just your sharp mind and intelligence, but the way you carry yourself, care for yourself, and stay grounded in your ambitions.',
            'As you step into 20, I genuinely wish you happiness that lingers, good health, peace and wellbeing for your family, and success in every single goal you are quietly working towards. You deserve a future that feels bright and kind to you.',
          ],
        },
        {
          number: 6,
          title: 'Something I Owe You',
          kicker: 'Chapter Six · An Honest Apology',
          paragraphs: [
            'Before turning the page forward, there is something I honestly owe you. I am sorry for being on and off in our friendship at times—for the stretches where I went quiet or felt distant.',
            'Sometimes when life gets overwhelming, I struggle to communicate properly and end up pulling back because I never want to burden you with my noise. It was never a lack of care or appreciation for you. You have always mattered to me more than my quiet phases ever showed.',
          ],
        },
        {
          number: 7,
          title: 'Until Next Year',
          kicker: 'Chapter Seven · Looking Forward',
          paragraphs: [
            'That is also why next year means so much to me. Knowing there is a chance of you joining and actually having you around next year genuinely excites me more than I probably say out loud.',
            'Until then, keep being curious, keep reading, keep taking care of yourself, and never doubt that someone out here is cheering wholeheartedly for you. Happy 20th Birthday, Lily—I really want you by my side.',
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
      closingLine: 'Twenty looks wonderful on you already.',
      oneMoreThingText:
        'Thank you for being my friend. This little website is just one way of saying that you matter to me.',
    },
  };
}
