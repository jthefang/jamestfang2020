import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

const books = [
  {
    title: 'The Four Agreements',
    href: 'https://www.goodreads.com/book/show/6596.The_Four_Agreements',
    date_finished: "09-21-20",
    bullets:
      <ul>
        <li>Chapter 1: Domestication and the Dream of the Planet
          <ul>
            <li>The dream is the collection of beliefs and ideas that are distinct from reality in that they exist entirely in your mind. You have your personal dream, which is your value system. There is also the dream of your family, your community, and the dream of the planet, which encompasses the societal beliefs and cultural doctrines that we have accepted and agreed to. This process of accepting and being socialized is essentially domestication.</li>
            <li>This outside dream gets drilled into our mind so that it is assimilated into our inside dream. And so this dream gets passed from generation to generation.
              <ul>
                <li>In the early years, a child may rebel against this outside dream. It does not align with their reality. It restricts their freedom. Yet, sooner or later most of us give up that freedom and accept the dream of society. This is our value and belief system</li>
                <li>And this is why it is so hard to challenge those values and beliefs, because whether we actually think they are valid or not, challenging them is tantamount to admitting that we were foolish, that we were duped somewhere along the way into accepting an invalid belief</li>
              </ul>
            </li>
            <li>But following a belief system that does not work for you causes inner turmoil
              <ul>
                <li>You will feel like a fraud. You will judge yourself by values that are not your own, and that your natural self would never want to attain anyway. This inevitably leads to self-abuse. You cannot live up to your ideals of what you should be. And then you fear that others will judge you in the same way</li>
                <li>This life of fear, guilt, doubt is literally hell on Earth. When these religious nuts talk about a place of punishment and suffering, that’s what incompatible beliefs create as a living reality right now. That’s what judgment and dogmatic acceptance of invalid beliefs create. </li>
                <li>Take back your freedom. Stop abusing yourself by Judging yourself and playing the Victim. </li>
              </ul>
            </li>
            <li>Justice is paying for a mistake exactly once. Injustice is paying for a mistake many times over. We’re the only species that pays for the same mistake over and over again, every time we think about it and judge ourselves.</li>
          </ul>
        </li>
        <li>Chapter 2: Be impeccable with your word
            <ul>
              <li>Impeccable means "without sin”. Sin is any action, belief or behavior that goes against yourself. When you judge or blame yourself, you go against yourself. You do this in your head all the time.</li>
              <li>Words are incredibly powerful. They create meaning and implant ideas or at least the seed of an idea in your mind and in the mind of others.
                <ul>
                  <li>Over time, if the mind is fertile ground for the seed, then that idea will grow and take hold in the dream, becoming part of the experience of reality that the mind lives.</li>
                  <li>By being impeccable with your word, you sow good seeds and make fertile ground for those seeds to grow. You also avoid bad seeds and prevent fertile ground for any bad seeds (e.g. from others) to grow</li>
                  <li>An example of how powerful the word can be is Hitler. The whole world went to war, million died, all because of the words of one man. Those words sowed seeds of fear and hatred that exploded in a world war and the suffering of millions.</li>
                  <li>An example of how words are toxic is gossip. Gossip is someone’s opinion of a thing or another person. These words are negative and will subtly color how you view the person being gossiped about in the future. They are a poison being seeded in your brain and may sprout and grow slowly, without you noticing. And the problem with this poison is that it will not make you feel good. And then to relieve that feeling, you decide to share it with others. It feels good to lessen that burden on yourself. It makes that poison ok; as long as someone else believes it, it makes the lie FEEL a little more true even though it isn’t. This is how gossip and misery spread like a virus. Misery loves company.</li>
                </ul>
              </li>
              <li>Start with being more kind and true in your words to yourself. How you think about yourself, how you react to the things you do, how you judge the actions you take or the thoughts you think. You can measure how impeccable you are with your word with how much you truly love yourself. It is a directly proportional. After that, you can start directly the power of the word out towards others, and spread †he love with it.</li>
            </ul>
          </li>
        <li>Chapter 3: Don’t take anything personally
          <ul>
            <li>This makes you inmune to poison in the middle of hell.</li>
            <li>It’s selfish to take things personally, to make everything about you. When people say or do something, even if it is directed at you, it comes from their own dream. It comes from a place in their reality separate from your reality, which is itself separate from the real reality. Remember, we’re all in a dream. Therefore, nothing they do is about you, and everything is about them.</li>
            <li>But what happens if you take it personally, is that you let their dream corrupt yours. If they are sending you poison, and you take it personally, you are just eating it up and internalizing it.</li>
            <li>If you are not afraid, there is no way you will get mad at me or hate me or be jealous or sad. If you live without fear, if you love, there is no place for any of those emotions. If you don’t feel any of those emotions, it is logical that you will feel good. When you feel good, everything around you is good. When everything around you is great, everything makes you happy. You are loving everything that is around you, because you love yourself. Because you like the way you are. Because you are content with you. Because you are happy with your life, the movie that you are producing, happy with your agreements with life. You are at peace and you are happy.</li>
            <li>The mind lives in more than one dimension. Sometimes you perceive an idea that did not originate from yourself. Your own thoughts may not be something you agree with. You have the choice to reject or accept any of your own ideas.</li>
          </ul>
        </li>
        <li>Chapter 4: Don’t make assumptions
          <ul>
            <li>Most conflicts with others comes from making mistaken assumptions and then taking things personally when they are wrong. </li>
            <li>We have the wrong notion that others think exactly like we do. Sometimes we feel as if they should know what we want or think without us having to say anything. The truth is, nobody really knows what is going on in your head. They barely know what’s going on in there’s.
              <ul>
                <li>At the same time, we assume what they are thinking or feeling or want without ever having the courage to ask them. This fear of communication leaves a gap in our knowledge that must be filled for us to feel safe. But we’re not brave enough to ask and fill it with the truth, so we make an assumption and tacitly plug it in as the “truth”. </li>
              </ul>
            </li>
            <li>You have the right to ask, just like others have the right to tell you yes or no. You also have the right to ask for what you want and have that made clear to others. </li>
          </ul>
        </li>
        <li>Chapter 5: Always do your best
          <ul>
            <li>Your best is going to fluctuate with your mood, your energy levels, you state of mind. But if you do your best, there is no room for self-judgment or pity or regret. You simply did all you could in the moment.
              <ul>
                <li>Don’t try to do more than your best, or you will simply over-exert yourself and also not meet expectations at the same time. </li>
                <li>Doing less than your best will lead to frustration, self-loathing and doubt.</li>
              </ul>
            </li>
            <li>Doing your best means taking action because you love it, not for the reward you expect. Do things out of love. Do everything out of love and you will achieve nirvana.</li>
          </ul>
        </li>
        <li>Chapter 6: Breaking old agreements
          <ul>
            <li>Part of our domestication is developing a Book of law, a personal Judge and Victim, all of which restricts our freedom and makes us suffer. Over time, we have accumulated beliefs about why we cannot do what we want. It’s hard to even realize we are restricting our own freedom when we are the very restrictor. But this repression of who we are muddies our lives, robs our experience of clarity. We are blocked by ourselves. You must simply get out of your own way.
              <ul>
                <li>You feel the presence of the parasite and you believe it is you. This makes it difficult to let go, release the parasite and create the space to experience freedom and love. </li>
              </ul>
            </li>
            <li>Your mind is full of emotional poison. Any thoughts that evoke hatred, anger, jealousy, fear…they are bad agreements you have made sometime in the past. And each time you think it, you are paying for that injustice an extra time too many. The art of transformation focuses attention on these agreements. Figure out what thoughts, what agreements, what beliefs have you made that have led to this poison in your spiritual system. Do anything you can to undermine that agreement, and replace that agreement with a new, healthier one. Any that you can think of.</li>
            <li>The discipline of the warrior is controlling your own behavior. Acting from a place of poison only deepens that wound. It makes that poison manifest in the physical world and creates a memory link as well. This is a BIG no no. 
              <ul>
                <li>The first step when we see poison is forgiveness. Immediately forgive anybody and anything that is causing you pain. You will have fully forgiven them when you have no emotional reaction to thinking about them. This is done to free yourself from that pain. If you keep emotional pain attached to the idea of them, then every time you think of them you will be causing yourself pain and paying for the injustice again! Don’t pay for the same injustice more than once!</li>
              </ul>
            </li>
            <li>Embracing the angel of death cuts away every burden and shackle in our mind. If you could die tomorrow, would you spend today in self-pity and despair. Would you spend your last moments in misery when they could be spent in joy and love. Would you let the past subject you to it’s pain, when the present is actually weightless and infinitely potentialful.</li>
          </ul>
        </li>
        <li>Chapter 7: Heaven on Earth
          <ul>
            <li>Use your imagination: believe you have the ability to see the world with different eyes, whenever you choose. Each time you open your eyes, you see the world around you in a different way. Close your eyes now, and then open them and look outside. What you will see is love coming out of the trees, love coming out of the sky, love coming out of the light. You will perceive love from everything around you. This is the state of bliss. You perceive love directly from everything, including yourself and other humans. Even when humans are sad or angry, behind these feelings you can see that they are also sending love</li>
          </ul>
        </li>
      </ul>,
    rating: {
      value: 4.5,
      reason: "The language and development of ideas in this book is very easy to follow. I think the ideas are also framed in a way that is unique but instantly relatable. And narrowing the focus of the book to four 'agreements' (note the contrast to commandments) makes the wisdom pretty easy to digest and implement. I especially like 'don't take anything personally'."
    }
  }, // The Four Agreements
  {
    title: 'Colorless Tsukuru Tazaki and His Years of Pilgrimage',
    href: 'https://www.goodreads.com/book/show/41022133-colorless-tsukuru-tazaki-and-his-years-of-pilgrimage',
    date_finished: "7-04-20, coronavirus quarantine still",
    bullets:
      <ul>
        <li>Tsukuru is lost. Growing up in the small city of Nagoya, he was part of a deeply bonded group of friends. They were 5 of them, and they were a complete community unto themselves. They were the perfect group and did everything together for their whole childhood, up until college. That’s when Tsukuru moved to Tokyo to follow his quirky passion to be a train station engineer. The others stayed in Nagoya, though they tried to stay close. One summer, however, he is suddenly and ruthlessly cut out of their group with no explanation. He is devastated and this whole book is about the aftermath of that incident on his psyche into his middle age; he’s 36 in the book’s current events, although there are plenty of flashbacks as Murakami likes to do. You could say the book is a sort of midlife crisis resolution.</li>
        <li>One of the main ideas in the book is given in the title. Tsukuru views himself as a colorless empty vessel. His other 4 friends all had colorful names. They literally had the words for red, blue, black and white in their names. He doesn’t think he has much of a personality and doesn’t bring much to the table in his personal relationships. That was why he thinks he was cut out. This idea plagues his life. He doesn’t have any friends, and only occasional flings with girlfriends. He meets a woman, Sara, that he falls in love with, but he is unsure whether he can provide her happiness.</li>
        <li>I think I also feel this way sometimes. There is this feeling that I don’t feel things as intense as I used to as a child. Have I lost some vitality for life? That is sad because a colorful life is exciting and joyous, and that seems better than a low-key life of obscurity. We want to leave an impression on at least some part of this world, and that means providing that color to the people in our lives. And this sense that everybody else lives so much more vividly; we’re told that’s the illusion social media creates.</li>
        <li>Another idea is how we cling to the past. "You can hide memories, but you can't erase the history that produced them." The events that happened to us dig themselves into our psyche, and we can't escape that. They will be processed by your conscious or subconscious whether you like it or not. And it will affect the way you think about others and yourself. This book was about reckoning with the past, to make some sense of it and move on.</li>
        <li>Quotes</li>
        <ul>
          <li>Jealousy was the most hopeless prison in the world. Jealousy was not a place he was forced into by someone else, but a jail in which the inmate entered voluntarily, locked the door, and threw away the key. And not another soul in the world knew he was locked inside. Of course if he wanted to escape, he could dose. The prison was, after all, his own heart. But he couldn’t make that decision. His heart was as hard as a stone wall. This was the very essence of jealousy."</li>
          <li>Originality is nothing but judicious imitation. So said Voltaire, the realist."</li>
          <li>Everything has boundaries. The same holds true with thought. You shouldn’t fear boundaries, but you also should not be afraid of destroying them. That’s what is most important if you want to be free: respect for and exasperation with boundaries."</li>
          <li>And you’ll return to real life. You need to live it to the fullest. No matter how shallow and dull things might get, this life is worth living. I guarantee it."</li>
          <li>There’s still something stuck inside you. Something you can’t accept. And the natural flow of emotions you should have is obstructed."</li>
          <li>Still, being able to feel pain was good. It’s when you can’t even feel any pain anymore that you’re in real trouble."</li>
          <li>Maybe I am just an empty, futile person, he thought. But it was precisely because there was nothing inside of me that these people could find, if even for a short time, a place where they belonged. Like a nocturnal bird seeks a safe place to rest during the day in a vacant attic. The birds like that empty, dim, silent place. If that were true, then maybe he should be happy he was hollow."</li>
          <li>One heart is not connected to another through harmony alone. They are, instead, linked deeply through their wounds. Pain linked to pain, fragility to fragility. There is no silence without a cry of grief, no forgiveness without bloodshed, no acceptance without a passage through acute loss. That is what lies at the root of true harmony."</li>
        </ul>
      </ul>,
    rating: {
      value: 4,
      reason: "Murakami is a fantastic writer. He can write about anything, and I’ll probably enjoy reading it. He makes really mundane things like sitting at a train station seem like a deeply meaningful activity. There’s also the touch of magical realism here that he’s known for. But the most frustrating part of his books is that there’s hardly ever the closure I want. The story just ends. So if you want a true Murakami experience, this book is it."
    }
  }, // Colorless Tsukuru Tazaki
  {
    title: 'When: The Scientific Secrets of Perfect Timing',
    href: 'https://www.goodreads.com/book/show/35412097-when',
    date_finished: "7-01-20, coronavirus quarantine still",
    bullets:
      <ul>
        <li>Human emotions and energy are bimodal; energy rises until noon (12-1pm), then dips to rise again starting at 4pm into the evening. Hence, critical operations should be conducted early in the day or after 3pm.</li>
        <li>We are more irritable, frustrated and combative in the afternoon.</li>
        <ul>
          <li>This was shown in stock market earning reports: report in the morning were more upbeat than the ones in the afternoon, independent of other factors like market growth, company prospects, etc. The price eventually goes the right way, but the initial reaction is more negative towards afternoon reports.</li>
          <li>Jurors are less racist in the morning when their mental alertness is up. In the afternoon, they default to easy stereotypes (morning morality effect). Danish students perform better on math tests if those classes are early in the morning.</li> 
        </ul>
        <li>Alertness, energy and inhibitions all drop</li>
        <ul>
          <li>This is actually good for creative/insight problems since it can help you relax and see the connections. But for brute force analytic problems, afternoon is a sub-optimal time</li>
        </ul>
        <li>It's important to figure out your cycle: there are morning larks/midday people (60-70% of the population) and there are night owls. Morning people follow a peak, trough and rebound cycle. Night owls follow a rebound (wind up), trough, peak cycle. You want to do your most intensive and important work at your peak and your secondary work or work that involves loosening your inhibitions (generating more creativity) in your rebound. Don’t let mundane tasks creep into your peak</li>
        <li>People’s moods are generally better in morning. This is the time you’re most likely to make a good impression. People are more creative in the late afternoon. This is a good time to have a brainstorming session</li>
        <li>Morning exercise is: easier to maintain as a routine, burns fat better (you haven’t eaten for 8 hours), boosts mood for the whole day, and is better for building strength</li>
        <ul>
          <li>Late afternoon workout is advantageous in other ways: your body is warm so you're less likely to encounter injury, you perform better (disproportionate amount of Olympic records set in the late afternoon to evening), and don’t have to exert as much effort so the workout is more enjoyable</li>
        </ul>
        <li>Tips for a better morning:</li>
        <ul>
          <li>Drink glass of water when you wake up </li>
          <li>Don’t drink coffee, it fucks with your natural system that will wake you up (cortisol stress hormone that is released by your body to wake you up). Cortisol also promotes learning. Hence, we learn best in the morning (we're more focused and easily absorb info). Drinking coffee in the morning also builds up an unnecessary tolerance.</li>
          <li>Get some sun. Sunlight naturally makes your body less sleepy and more alert</li>
        </ul>
        <li>The afternoon is the Bermuda Triangle of the day</li>
        <ul>
          <li>Colonoscopies find on average 1/2 the amount of polyps in the afternoon as in the morning</li>
          <li>Sleep-related car accidents peak between 2-6am and 2-4pm</li>
          <li>The most unproductive moment of the day is 2:55pm according to a UK study</li>
          <li>If you have to do something important in the afternoon, make sure you take a vigilance break (make yourself alert and review all pertinent info)</li>
        </ul>
        <li>How to take a restorative break:</li>
        <ul>
          <li>Something beats nothing. If we stick with a task for too long, we lose sight of the goal we’re trying to achieve; this is called habituation. Frequent short breaks are more effective than occasional long ones. The golden ratio is 52 to 17 minutes work to break time. </li>
          <li>Moving beats stationary. Sitting is the new smoking. Hourly 5 minute walking breaks boost energy levels, sharpen focus, improve mood and reduce fatigue.</li>
          <li>Social beats solo. It’s more effective if you take a break with someone you want to be around. </li>
          <li>Outside beats inside. Nature replenishes us the most</li>
          <li>Fully detached beats semidetached. Do your breaks tech-free, without checking social media or email or texts, and without thinking about any work or tasks you have to do. </li>
        </ul>
        <li>10-20 minute naps help us avoid the mid-afternoon trough. Any longer and we fall prey to sleep inertia, that groggy feeling after a too-long nap. Nappers are more health, have lower blood pressure, and perform better in the afternoon. Caffeine takes approximately 25 minutes to hit, so taking caffeine right before a 10-20 minute nap is the ultimate siesta (the nappuccino). </li>
        <ul>
          <li>Ultimate nap steps: </li>
          <ul>
            <li>1. nap at the right time (between 2-3pm or 7 hours after you wake up) </li>
            <li>2. create a peaceful environment</li>
            <li>3. down 200mg of caffeine (a cup of coffee)</li>
            <li>4. Set timer for 25min (it takes about 7 min to doze off)</li>
          </ul>
        </ul>
        <li>Micro-break ideas:</li>
        <ul>
          <li>20-20-20: every 20 minutes, take a 20 second break to look at something 20 feet away. And remind yourself to improve your posture.</li>
          <li>Hydrate: get a small water container (or fill your nalgene just 1/4 of the way) so when it runs out you have to get up and refill it</li>
          <li>Wiggle your body to reset your mind: stand up for 60 seconds, shake your arms and legs, flex your muscles, rotate your core, then sit back down</li>
        </ul>
        <li>Beginnings are extremely important. Start right. Start again. Start together</li>
        <ul>
          <li>Schools that start an hour later at 8:30am have higher attendance, better test scores, higher graduation rates and lower car accidents.</li>
          <li>Our brains use temporal landmarks to shed off our old selves and rebrand ourselves anew (e.g. New Years, start of the month, day after our birthdays etc.). It’s a powerful technique to be able to disassociate yourself from the old you and adopt new habits and behaviors. Therefore beginnings are meaningful. Give yourself a new beginning.</li>
          <li>Start together: beginnings are so important, we should be especially compassionate and helpful to those who are struggling to start (their careers, their lives, etc). </li>
          <li>How to make a fast start in a new job</li>
          <ul>
            <li>Begin before you begin: visualize yourself transforming into your new role before you enter the front door</li>
            <li>Let your results do the talking: don’t try too hard to establish yourself early. Concentrate on accomplishing a few meaningful achievements, and once you’ve demonstrated excellence, then you can assert yourself.</li>
            <li>Stockpile your motivation. Take advantage of your spurts of motivations to do the hard stuff. </li>
            <li>Sustain your morale with small wins</li>
          </ul>
        </ul>
        <li>Midpoints: the midlife crisis and a chance to come back roaring</li>
        <ul>
          <li>Psychologists have noticed a u-shaped “slump” that is commonly referred to as the midlife crisis. General life satisfaction is high in our 20s, but starts to slump in our 30s and reaches an all time low in our 40s and 50s, but experiences a rebound in our twilight years</li>
          <ul>
            <li>Midlife is when death starts looming; this galvanizes action</li>
            <li>“It’s the period when the Universe grabs your shoulders and tells you 'I’m not fucking around, use the gifts you were given’"</li>
          </ul>
          <li>Researchers have also noticed this effect in small team projects. We usually waste time initially, but when the midpoint of the project hits (between start and deadline) we enter “uh oh” mode and really kick it into another gear. This is when most of the progress and work is done. Work is not incremental but happens in punctuated bursts.</li>
          <ul>
            <li>Motivation and effort is high at the beginning and end, but slumps in the middle </li>
          </ul>
          <li>In basketball, teams who are down by 1 point at halftime are actually more likely to win the game (58% chance). This is because it’s a wakeup call. You come back roaring for action. It’s like waking up to an alarm clock and realizing you're running late. You bet your ass you're getting out of bed.</li>
          <li>To turn the slump into a spark:</li>
          <ul>
            <li>1. be aware of midpoints (don’t let them be invisible)</li>
            <li>2. use them to wake up rather than roll over (uh-oh rather than resigned oh no)</li>
            <li>3. imagine that you’re behind but only by a little; this will spark your motivation</li>
          </ul>
          <li>How to get out of a slump</li>
          <ul>
            <li>1. Set interim goals (instead of focusing on finishing the race, focus on getting to the next mile; that’s your goal)</li>
            <li>2. Publicly commit to those interim goals, so you’re held accountable</li>
            <li>3. Stop your sentence midway (e.g. as a novelist; leave the task half-finished, so you have to come back, and when you do, there’s an immediate obvious next step for you to take)</li>
            <li>4. don’t break the chain (Seinfield technique)</li>
            <li>5. Picture one person your work will help</li>
            <ul>
              <li>Instead of "how can I continue?”, it’s “how can I help"</li>
            </ul>
          </ul>
          <li>Prioritize your top goals</li>
          <ul>
            <li>write your top 25 goals for the rest of your life. Circle the top 5. Immediately start planning and taking action to achieving those 5 goals and get rid of the other 20 at all costs. Don’t even consider them until you’ve achieved the top 5. </li>
          </ul>
        </ul>
        <li>Endings are of especial significance to us psychologically</li>
        <ul>
          <li>They energize us to accomplish something before the end</li>
          <ul>
            <li>A disproportionate amount of first-time marathoners have an age that ends with a 9 (e.g. 29, 39, 49)</li>
            <li>A disproportionate amount of points are scored in the last minute of the first half of a NFL game</li>
            <li>When given a deadline to submit a loan application or use a coupon, people are 24% more likely to respond or use it, and usually right before the deadline</li>
          </ul>
          <li>They help us encode meaning to the whole experience</li>
          <ul>
            <li>The peak-end rule: what we remember most strongly about an experience is the most intense part of it and the end of it.</li>
            <li>This skews our memory of the experience</li>
          </ul>
          <li>They encourage us to edit our lives and prioritize those things that are meaningful</li>
          <ul>
            <li>The older people get, the more they edit out their relationships to just a few close friends for whom their interactions are meaningful and give the greatest emotional benefit. </li>
            <li>This happens at the end of anything: college, the end of Hong Kong being a British territory, etc.</li>
          </ul>
          <li>Endings are elevated by poignancy, a mixture of happiness with sadness (like the end of Pixar movies)</li>
          <ul>
            <li>People assign more meaning to endings that are bittersweet </li>
            <li>We also favor sequence of events that rise rather than fall. 80% of people prefer the bad news before the good news.</li>
          </ul>
          <li>At the end of a workday: take 2-3 minutes to write down what you accomplished since the morning. Making progress is the single largest day-to-day motivator on the job. Take another 2-3 minutes to lay out your plan for the following day.</li>
        </ul>
        <li>Synchronizing</li>
        <ul>
          <li>Humans are social creatures. Synching to the group and tribe and heart is something that we all deeply desire. It’s that sense of belonging. We do it by matching garb (clothes), code (language or special lingo), and touch (handshake, high five). </li>
          <li>Coordinating and synchronizing with other people is a powerful way to lift your psychological and physiological well-being.</li>
          <li>To properly synch: we all need a clear boss or external reference to which the group synchs and observes. A sense of belonging deepens this synchronization, and the uplift (feeling good and doing good) is a virtuous cycle of cooperation</li>
        </ul>
      </ul>,
    rating: {
      value: 5,
      reason: "There's a lot of interesting research packed into this little book, and it's not like the stuff he mentions is non-obvious. I feel tired in the afternoons pretty much on the daily. I just never really stopped to think about the reasons and the effects it would have on my tasks. I think America does have a workoholic culture. We're a go-go-go society and this science is telling us to take a step back and focus our efforts in ways that work with and not against our bodies. There are some nuggets of advice like the nappuccino that allow you to incorporate this research into your daily life. Overall, I learned a lot from this book, so 5/5."
    }
  }, // when: the science of perfect timing
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    href: 'https://www.goodreads.com/book/show/28257707-the-subtle-art-of-not-giving-a-f-ck',
    date_finished: "5-06-20, coronavirus quarantine still",
    bullets:
      <ul>
    <li>Lot of curse words in this one, so forgive my french.</li>
    <li>
      Happiness is solving problems. It’s not about not having them. It’s about choosing which ones you find meaningful and are willing to struggle to solve. Life is a never ending stream of problems. You only get to choose which ones to give a fuck about. And once you solve them, congratulations, you’ve earned yourself an upgraded problem! Problems never end. They only improve. Warren Buffett has money problems. The hobo down the street has money problems. Buffett just has better money problems.
          <ul><li>"The desire for more positive experience is itself a negative experience. And paradoxically, the acceptance of one’s negative experience is itself a positive experience."</li></ul>
    </li>
    <li>Somewhere in the last couple decades, we’ve started devaluing the mundane and ordinary experiences of life. We started believing that being average was an insult. There was something wrong if we just turned out to be an ordinary human being. We had to be special. To be extraordinary. TV and social media taking off in the past few decades hasn’t helped. More and more, we see the extreme ends of human society. The best athletes, the hottest people, the funniest comedians. We think we have to be like them to deserve attention. We have to be extreme. Is this the reason for the shootings? These people want to do something meaningful, because the only thing that is meaningful is something that is worthy of the world’s attention. There’s something wrong with that. With devaluing the mundane and only applauding the extraordinary.</li>
    <li>Values are what ultimately guide what problems we focus on and how we view our problems. Good values will provide us problems that we can solve and that bring sustainable happiness. Bad values will provide us problems that will only keep getting worse and make us feel shittier and shittier. Pay attention to your problems and emotions. What are you dealing with, and why? What is the underlying reason/value system that is causing you to suffer or feel joy? Good values (like honesty, curiosity, humility, action) are things that we can control. They’re internal. We can make progress on them immediately. And in the long term they will make your life better. Bad values (like pleasure, material success, always having to be right, avoiding problems or "staying positive") rely on things out of your control (external things) like the judgment of others or an actual external object. Bad values deny reality and in the long term, will bring you more trouble than they are worth.</li>
    <li>With great responsibility comes great power. Responsibility is taking ownership of your own experience. This is not to say that you are to blame for WHAT happens to you. What happens to you is sometimes/oftentimes outside of your control. HOW you react to it, how you process and interpret what happens to you, that is 100% in your control whether you want it or not. Not making a decision is still a decision you make. Not choosing to interpret things is still something you decide to do. You cannot avoid the responsibility, even if you think you are. So be conscious of it. Take responsibility in a way that will improve your life.</li>
    <li>
      Growth starts only when you admit and believe you don’t know shit. Uncertainty is what provokes your curiosity to learn. Certainty leads to righteous arrogance. You might believe your brain is mostly right, but remember who it is that’s thinking that.
          <ul>
        <li>Parkinson’s law: work expands to fill up the time available for its completion</li>
        <li>Manson’s law of avoidance: the more something threatens your identity, the more you will avoid it</li>
        <li>Once we have a certain belief, some pattern our brain has picked up and thinks is right, our brain biases reinforcing information for that idea.</li>
        <ul>
          <li>This is why it’s so hard to change yourself. Or to take a leap. That leap may be in direct contradiction with your beliefs about yourself or your identity. It’s far easier (on your brain) if your beliefs stay constant, but this is not necessarily the best for you. An Artist That Nobody’s Heard Of must shed himself of that identity to become An Artist That People Talk About even if that comes at the risk of being An Artist Nobody Likes. But you can see how that will be uncomfortable - how it could be easy to just stay An Artist Nobody’s Heard Of.</li>
          <li>For anything to change, then you must have been wrong about something. And everything does change, so you’re always wrong.</li>
          <li>"Knowing yourself" can be too rigid. It will silo you into categories and force unnecessary expectations upon yourself. It will cause you to resist any change you try to enact in your life. Don’t find yourself. That will keep you searching and discovering new ways to be and to stay humble in your judgments of others. Accept their differences, because you could be them too.</li>
          <li>There is no point to pinning yourself down, because that only locks you in to rigid actions and thoughts. And if there’s anything you know about life it’s that you must be flexible and reactive.</li>
        </ul>
        <li>Your problems aren’t special. You aren’t special. Define yourself in the most ordinary and broad way you can (a student, a son, a web developer). This internally allows you more freedom. You don’t have any expectations to live up to. Everything is possible. You are allowed the whole range of emotions, actions and reactions. And this is what life calls for.</li>
        <li>If you think that it’s you vs the world, most likely it’s you vs yourself.</li>
      </ul>
    </li>
    <li>
      If we’re unwilling to fail then we’re unwilling to succeed. Growing pains are normal, necessary even.
          <ul>
        <li>Growth generates happiness, not arbitrary accomplishment.</li>
        <li>Life is about not knowing and then doing something anyways. It never changes.</li>
        <li>The do something principle: if you"re stuck, do something. Anything. Make any progress you think is possible. Nothing is too small. Answers will follow. Inspiration is the REWARD of action.</li>
      </ul>
    </li>
    <li>Commitment is liberation. The paradox of choice is: the more options we’re given, the less satisfied we become with whatever we choose, because we’re aware of all the other options we’re potentially forfeiting. More is not always better. Sure breadth of experience is good for exploration and figuring out what things you want to focus on. But focusing on one thing and getting depth of experience is where true value and happiness is found. Commitment makes decision-making easier and removes any fear of missing out; knowing that what you already have is good enough, why would you ever stress about chasing more?</li>
    <li>
      Death puts everything into perspective. We are all going to die. There is nothing to be afraid of ever. It will all end soon. Do then die.
          <ul>
        <li>If there is no reason to do anything, then there is also no reason to NOT do anything. "There is no reason to ever give into shame or embarrassment, since it’s all a bunch of nothing anyway."</li>
        <li>We give fucks because we’re desperately trying to attach meaning on our life. That’s why we want attention. We want to feel, even for a second, that our life matters. That we’re not here for nothing. We want to be immortalized in the minds of others.</li>
        <li>"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time." - Mark Twain</li>
        <li>"Happiness comes from caring about something grater than yourself, believing that you are a contributing component in some much larger entity, that your life is but a mere side process of some great unintelligible production."</li>
      </ul>
    </li>
  </ul>,
    rating: {
      value: 4,
      reason: "Like with most self-help books, the message is plain and self-evident. The point of reading it, I guess, is to have it all laid out in English. To expose the ideas concretely, instead of letting them float in the subconscious. Unlike most self-help books, this one is actually kind of entertaining to read. The guy is funny. At least for the first half of the book. Probably has something to do with his unrestricted cursing. I think the second half started sounding like normal self-help books, like all of a sudden he sobered up, and I started losing interest (oops). But there's some good nuggets of wisdom to chew on."
    }
  }, // subtle art of not giving a fuck
  {
    title: 'The Fifth Mountain',
    href: 'https://www.goodreads.com/book/show/1429.The_Fifth_Mountain',
    date_finished: "4-27-20, coronavirus quarantine",
    bullets:
      <ul>
        <li>Elijah the prophet, from god fearing, old testament Israel is chosen by god to oust the Phoenician Princess from the throne, because she wants everybody in the kingdom to worship Phoenician gods and not the one and almighty Yahweh. He goes on a whole journey of exile from his land, starves through the desert, finds love in a new city, only to have that city burn to the ground along with the woman he loved. Ends up the point is: the whole time he was just trying to do what god told him. But the important thing in life is to struggle. To wrestle with it and impose your own path. Don’t unquestioningly accept your fate. Question it and shape it. It’s no fun for god otherwise and he will fuck with you to get you to do it anyway.</li>
        <li>The religion of today is capitalism. We believe if we go to school, get a degree, start a business, make it big, that's success. But this mission was never ours. It was one pushed onto us by the media (i.e. our Yahweh). Blindly following this path and expecting God (the economy) to take care of you will (probably) lead to sore disappointments, and the whole time you'll be feeling shitty because you haven't achieved it yet. Whereas, if you struggle for something that YOU decide is meaningful, the whole time you're secretly happy from your own freedom and autonomy. The certainty that this mission is yours and these values come from you, that's it. You going after that. That's fulfillment.</li>
      </ul>,
    rating: {
      value: 3.5,
      reason: "I like the message, but it felt like a rushed read. Perhaps I've read too much long-winded academic fluff for my own good, and this just contrasts too much. I get that religion in the book is used as a metaphor for our almost religious belief in our systems today, but it still kind of bothered me how biblical and outdated this book read."
    }
  }, // the fifth mountain
]

export default class Summaries extends Component {
  render() {
    return (
      <Row className="justify-content-center mb-5 pb-5">
        {books.map((book, index) => (
          <Col key={index} className="my-5 px-5" lg="7">
            <h2>{book.title}</h2>
            <p><small><a href={book.href} target="_blank" rel="noopener noreferrer">Goodreads</a></small></p>
            <p><em>{book.rating.value}/5: {book.rating.reason}</em></p>
            <p>{book.bullets}</p>
          </Col>
        ))}
      </Row>
    )
  }
}
