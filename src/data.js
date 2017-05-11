export default {
  /**
   * General configuration options:
   */
  config: {
    /**
     * Default states for checkboxes:
     */
    showTags: true,
    showCommas: true,
    /**
     * Whether or not to show the background photo:
     */
    showPhoto: false,
    /**
     * Text for column headers:
     */
    tableTitleLeft: 'What Trump said about...',
    tableTitleRight: 'International laws violated',
  },


  /**
   * Table text contents. Type using Markup. Reference here:
   *   http://commonmark.org/help/
   *
   * A SubjectCard template looks like this:

   {
     subject: `### `,
     tags: ['', '', ...etc]
     citationList: [
       {
         citationTitle: `#### `,
         description: ``,
         quote: ``,
       },
     ],
     lawList: [
       {
         lawTitle: `#### `,
         lawReference: ``,
       }, {
         lawTitle: `#### `,
         lawReference: ``,
       },
     ],
   },
   **/
  cardsList: [
    {
      subject: `### Punishing Women for Having Abortions`,
      tags: ['Women', 'Abortion'],
      citationList: [
        {
          citationTitle: `#### [Interview](https://www.youtube.com/watch?v=jGSttcyn2RI) on MSNBC, March 2016 `,
          description: `Matthews: “Do you believe in punishment for abortion – yes or no – as a principle?”
Trump: “The answer is there has to be some form of punishment.”
Matthews: “For the woman?”
Trump: “Yeah, there has to be some form.”`,
          quote: ``,
        },
      ],
      lawList: [
        {
          lawTitle: `#### Convention Against Torture`,
          lawReference: `[Art. 1](http://www.ohchr.org/EN/ProfessionalInterest/Pages/CAT.aspx) and [Art. 2](http://www.ohchr.org/EN/ProfessionalInterest/Pages/CAT.aspx): Committee Against Torture has said that prohibiting abortions and/or punishing women who have abortions constitutes inhuman treatment in violation of the Convention.`,
        },
      ],
    },
    {
      subject: `### Pregnancy and Women in the Workforce`,
      tags: ['Women', 'Pregnancy'],
      citationList: [
        {
          citationTitle: `#### [Interview](http://www.cnn.com/2016/06/02/politics/trump-wife-comments-abc-interview/) on ABC News, 1994`,
          description: `“Putting a wife to work is a very dangerous thing.”`,
          quote: ``,
        },
        {
          citationTitle: `#### [Interview](http://www.nbcnews.com/politics/2016-election/trump-2004-pregnancy-inconvenience-employers-n580366) on NBC, October 2004`,
          description: `“[Pregnancy is] a wonderful thing for the woman, it’s a wonderful thing for the husband, it’s certainly an inconvenience for a business. And whether people want to say that or not, the fact is it is an inconvenience for a person that is running a business.”`,
          quote: ``,
        },
      ],
      lawList: [
        {
          lawTitle: `#### International Covenant on Civil and Political Rights`,
          lawReference: `[Art. 1](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): Gives the right of self-determination and to “freely dispose of their natural wealth and resources without prejudice to any obligations arising out of international economic co-operation, based upon the principle of mutual benefit, and international law”.
[Art. 3 ](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx)and [Art. 4](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): Obligate States Parties to ensure equal rights for men and women, and circumvent gender discrimination.`,
        }, {
          lawTitle: `#### Universal Declaration of Human Rights `,
          lawReference: `[Art. 1](http://www.ohchr.org/EN/UDHR/Documents/UDHR_Translations/eng.pdf): Everyone is “born free and equal in dignity and rights.”`,
        },
      ],
    },
    {
      subject: `### Locking Up Hillary Clinton`,
      tags: ['Hillary', 'Clinton'],
      citationList: [
        {
          citationTitle: `#### [Campaign Rallies](https://www.washingtonpost.com/news/the-fix/wp/2016/11/22/a-brief-history-of-the-lock-her-up-chant-as-it-looks-like-trump-might-not-even-try/?utm_term=.c3073b19a8ab), 2016`,
          description: `Throughout the campaign, Trump led his supporters in chants of “lock her up.”`,
          quote: ``,
        },
        {
          citationTitle: `#### [Second Televised Presidential Debate](http://fortune.com/2016/10/10/presidential-debate-trump-clinton-jail/), October 2016`,
          description: `_To Hillary Clinton:_`,
          quote: `“If I win, I am going to instruct my attorney general to get a special prosecutor to look into your situation because there has never been so many lies, so much deception — there has never been anything like it and we’re going to have to get a special prosecutor.”`,
        },
      ],
      lawList: [
        {
          lawTitle: `#### International Covenant on Civil and Political Rights`,
          lawReference: `[Art. 14](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): Everyone with a criminal charge has the right to court and is innocent until proven guilty by law.
[Art. 15](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): Nobody should be punished for any act that was not criminal when committed.
[Art. 17](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): “No one shall be subjected to arbitrary or unlawful interference with his privacy, family, home or correspondence, nor to unlawful attacks on his honour and reputation” and “Everyone has the right to the protection of the law against such interference or attacks.”`,
        },
      ],
    },
    {
      subject: `### Using Drones to Kill Terrorist Suspects`,
      tags: ['Drones', 'Terrorist'],
      citationList: [
        {
          citationTitle: `#### [Interview](https://www.democracynow.org/2016/12/27/what_will_happen_when_donald_trump) with the Daily Mail, May 2016`,
          description: `“As far as drones are concerned, yes, to take out terrorists. The only thing is I want them to get it right. But to take out terrorists yes I think that is something I would continue to do.”`,
          quote: ``,
        },
      ],
      lawList: [
        {
          lawTitle: `#### UN Charter`,
          lawReference: `[Art. 2](http://www.un.org/en/sections/un-charter/chapter-i/): Continued use of drone strikes violates Art. 2 on the use of force. In October, 2013, [two reports](http://www.npr.org/sections/thetwo-way/2013/10/22/239597012/u-s-drone-strikes-violate-international-law-reports-allege), one from Amnesty International and one from Human Rights Watch, found that US policy and practices for the international use of lethal force against terrorism suspects and other people who happen to be near such suspects goes far beyond what international human rights law permits.`,
        }, {
          lawTitle: `#### International Covenant on Civil and Political Rights`,
          lawReference: `[Art. 6](http://www.ohchr.org/EN/ProfessionalInterest/Pages/CERD.aspx): These killings were found to disregard international protections for the right to life and the prohibition of the arbitrary deprivation of life. `,
        },
      ],
    },
    {
      subject: `### Killing the Families of Terrorists`,
      tags: ['Terrorist'],
      citationList: [
        {
          citationTitle: `#### [Interview](http://www.cnn.com/2015/12/02/politics/donald-trump-terrorists-families/) on Fox & Friends, December 2015`,
          description: `“The other thing with the terrorists is you have to take out their families, when you get these terrorists, you have to take out their families. They care about their lives, don’t kid yourself. When they say they don’t care about their lives, you have to take out their families.”`,
          quote: ``,
        },
      ],
      lawList: [
        {
          lawTitle: `#### Customary International Humanitarian Law`,
          lawReference: `[Rule 1](https://ihl-databases.icrc.org/customary-ihl/eng/docs/v1_cha_chapter1_rule1) and [Rule 14](https://ihl-databases.icrc.org/customary-ihl/eng/docs/v1_cha_chapter4_rule14): Attacking civilians is a war crime and potential crime against humanity which violates Customary International Humanitarian Law Rule 1 on the principle of distinction, and 14 on the principle of proportionality.
[Rule 50](https://ihl-databases.icrc.org/customary-ihl/eng/docs/v1_rul_rule50): This also violates Rule 50 on the principle of necessity which prohibits destruction of an enemy’s property unless if it is “required by imperative military necessity.”`,
        }, {
          lawTitle: `#### International Covenant on Civil and Political Rights`,
          lawReference: `[Art. 6](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): Gives everyone the right to life and limits death sentences for only the “most serious crimes”.`,
        },
      ],
    },
    {
      subject: `### Shooting Russian Aircraft`,
      tags: ['Russia'],
      citationList: [
        {
          citationTitle: `#### [Interview](http://www.ibtimes.co.uk/trump-says-us-has-gotta-shoot-russian-planes-performing-barrel-rolls-if-democracy-fails-1558024) on Fort Wayne's Morning News, May 2016`,
          description: `_When questioned about the recent incidents involving Russian military aircraft speeding past U.S. navy vessels in European waters:_`,
          quote: `“I mean, at a certain point, you have to do something … you just can’t take that… But it should certainly start with diplomacy and it should start quickly with a phone call to Putin, wouldn’t you think? And if that doesn’t work out, I don’t know, you know, at a certain point, when that sucker comes by you, you gotta shoot.”`,
        },
      ],
      lawList: [
        {
          lawTitle: `#### Customary International Humanitarian Law`,
          lawReference: `[Rule 145](https://ihl-databases.icrc.org/customary-ihl/eng/docs/v1_rul_rule145): The use of force as a means of reprisal would be disproportionate and premature. Belligerent reprisals must be proportionate and a method of last resort.`,
        }, {
          lawTitle: `#### UN Charter`,
          lawReference: `[Art. 2](http://www.un.org/en/sections/un-charter/chapter-i/): Requires members to solve international disagreements peacefully and avoid the use of force.
[Art. 39](http://www.un.org/en/sections/un-charter/chapter-vii/index.html), [41](http://www.un.org/en/sections/un-charter/chapter-vii/index.html), and [42](http://0.0.0.42/): The Security Council must determine measures of “threat to the peace” and to “maintain or restore international peace and security.”`,
        },
      ],
    },
  ],
};
