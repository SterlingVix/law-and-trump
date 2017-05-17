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
    tableTitleLeft: 'Trump’s words and actions',
    tableTitleRight: 'International laws violated',
    /**
     * Last updated:
     */
    updated: 'March 20, 2017',
  },


  /**
   * Table text contents. Type using Markup. Reference here:
   *   http://commonmark.org/help/
   *
   * A SubjectCard template looks like this:

   {
     subject: `### `,
     tags: [''],
     citationList: [
       {
         title: `#### `,
         description: ``,
       },
     ],
     lawList: [
       {
         title: `#### `,
         description: ``,
       }, {
         title: `#### `,
         description: ``,
       },
     ],
   },
   **/
  cardsList: [
    /***********************/
    {
      subject: `### Reinstating and Expanding the Global Gag Rule`,
      tags: [''],
      citationList: [
        {
          title: `#### Executive Order, January 27th 2017`,
          description: `Signed a Presidential Memorandum blocking federal funding for international NGOs or programs that provide information, counseling, or referrals for abortion services, provide abortion services, or advocate for a woman’s right to seek abortion services as part of comprehensive reproductive health care. These restrictions are not applied on US based NGOs because they would violate Constitutional protections of freedom of speech.
The memorandum directs “the Secretary of State, in coordination with the Secretary of Health and Human Services, to the extent allowable by law, to implement a plan to extend the requirements of the reinstated Memorandum to global health assistance furnished by all departments or agencies.” This could encompass US funding for programming related to Malaria, Zika, Ebola and HIV/AIDs, amongst others.`,
        },
      ],
      lawList: [
        {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `Art 2: Obligates countries to enshrine certain rights.
Art 3: Guarantees women equal rights.
Art 6: Guarantees the right to life.
Art. 7: Prohibits torture and cruel, inhuman or degrading treatment.
Art 9: Guarantees rights to liberty and security of person.
Art 17: Prohibits unlawful interference with privacy and family.
Art 22: Guarantees freedom of association.
Art. 25: Prohibits unreasonable restrictions on people’s full and free choice in elections and issues of public policy.
Art. 26: Guarantees women equal protection under the law.`,
        }, {
          title: `#### Customary International Humanitarian Law`,
          description: `Geneva Conventions, common Art. 3
Women and girls facing pregnancy during armed conflict are entitled non-discriminatory medical care.`,
        }, {
          title: `#### Convention Against Torture`,
          description: ` Art. 1: Prohibits torture.
Art. 2: Requires countries to take action to prevent torture.
Art. 14: Prohibits cruel and inhuman treatment.`,
        }, {
          title: `#### Universal Declaration of Human Rights`,
description: `Art. 1, Art. 2, Art. 3, Art. 5, Art. 12, Art. 19, and Art. 25 : Includes the right to equality, right to be free from discrimination, right to life, liberty and security, right to be free from torture and cruel treatment, right to privacy, right to health, and protections for free speech and expression.`,
        },
      ],
    },
    {
      subject: `### Executive Orders Targeting Muslims`,
      tags: [''],
      citationList: [
        {
          title: `#### Executive Order, January 27th, 2017`,
          description: `Signed an Executive Order, “Protecting the Nation from Foreign Terrorist Entry into the United States,” lowering the number of refugees to be admitted into the United States to 50,000, suspending the U.S. Refugee Admissions Program (USRAP) for 120 days, suspending the entry of Syrian refugees indefinitely, and immediately imposing a 90-day ban on the entry of nationals from Iran, Iraq, Libya, Somalia, Sudan, Syria, and Yemen for immigration and non-immigration purposes, with limited exceptions.
This order was halted by a court order on February 3rd. On March 6th President Trump signed a second executive order with much of the same restrictions as the first. The second order was halted by a judge on March 16th.`,
        },
      ],
      lawList: [
        {
          title: `#### Refugee Convention Art. 33
Convention Against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment Art. 3`,
          description: `A religious bar could be held to violate US obligations in individual cases under international law, including the Refugee Convention and Convention against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment, and would conflict with numerous US statutes concerning refugee protection.
It would also violate the principle of ‘non-refoulement’ in the Refugee Convention Art. 33 and Convention against Torture Art. 3, which states that you cannot force refugees or asylum seekers to return to a country in which they are likely to be subjected to persecution.`,
        }, {
          title: `#### International Covenant on Civil and Political Rights `,
          description: `Art. 4: States that act to protect the life of the nation must not comprise discrimination on the basis of religion
Art. 20: “Any advocacy of national, racial or religious hatred that constitutes incitement to discrimination, hostility or violence shall be prohibited by law.”`,
        },
        {
          title: `#### International Convention on the Elimination of All Forms of Racial Discrimination`,
          description: `Art. 1: Prohibits racial discrimination
Art. 2 and Art. 3: States Parties shall take action to prevent religious discrimination, racial segregation and apartheid.
Art. 4: States Parties must convict propaganda and organizations promoting religious discrimination.
Art. 5: States Parties must ensure equal rights to everyone to eliminate racial discrimination.`,
        }, {
          title: `#### Universal Declaration of Human Rights`,
          description: `Art. 2: Prohibits discrimination.`,
        },
      ],
    },
    {
      subject: `### Increasing Deportation Raids`,
      tags: [''],
      citationList: [
        {
          title: `#### Executive Order, January 25th 2017`,
          description: `Signed Executive Order, “Border Security and Immigration Enforcement Improvement” that issued guidance to Immigration Enforcement Agencies for stricter enforcement, directing them to hire thousands of new agents to apprehend illegal immigrants, and if necessary, send them back to their country of origin. It revived a program of involving local police in the enforcement of immigration laws; drastically increased indefinite detention of undocumented immigrants without evidence they pose any threat; and increased removal proceedings for a broader class of immigrants charged with but not necessarily convicted of crimes. The order directs the immediate construction of detention facilities along the southern border.`,
        },
      ],
      lawList: [
        {
          title: `#### Universal Declaration of Human Rights`,
          description: `Art. 3: Gives the right to life, liberty and security of person.`,
        }, {
          title: `#### International Covenant on Civil and  Political  Rights`,
          description: `
Art. 17:   “No one shall be subjected to arbitrary or unlawful interference with his privacy, family, home or correspondence, nor to unlawful attacks on his honour and reputation” and “Everyone has the right to the protection of the law against such interference or attacks.”`,
        }, {
          title: `#### Vienna Convention on Consular Relations`,
          description: `Art 36 (1)(b) and (c): The execution of this policy would likely violate foreign nationals’ international rights to communicate and meet with his or her consular officials.`,
        },
      ],
    },
    {
      subject: `### Conducting a Raid in Yemen`,
      tags: [''],
      citationList: [
        {
          title: `#### Authorized military action in Yemen, January 25th 2017`,
          description: `One US Commando and at least 23 civilians, including women and children, were killed in the January 29th mission on an al Qaeda in the Arabian Peninsula (AQAP) target, according to London-based NGO Reprieve and a Sanaa-based human rights worker.
The raid also destroyed much of the village of Yakla. Yemen’s foreign minister, Abdul Malik Al Mekhlafi, condemned the raid on Monday in a post on his official Twitter account as “extrajudicial killings.”`,
        },
      ],
      lawList: [
        {
          title: `#### UN Charter`,
          description: `Art. 2: “All members shall refrain in their international relations from the threat or use of force against the territorial integrity or political independence of any state, or in any other manner inconsistent with the Purposes of the United Nations.”`,
        }, {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `Art. 6: Gives everyone the right to life and limits death sentences for only “the most serious crimes”.`,
        }, {
          title: `#### Customary International Humanitarian Law`,
          description: `Rule 1 and Rule 14: Attacking civilians is a war crime and potential crime against humanity which violates Customary International Humanitarian Law Rule 1 on the principle of distinction, and 14 on the principle of proportionality.`,
        },
      ],
    },
    {
      subject: `### Punishing Women for Having Abortions`,
      tags: ['Women', 'Abortion'],
      citationList: [
        {
          title: `#### [Interview](https://www.youtube.com/watch?v=jGSttcyn2RI) on MSNBC, March 2016 `,
          description: `Matthews: “Do you believe in punishment for abortion – yes or no – as a principle?”
Trump: “The answer is there has to be some form of punishment.”
Matthews: “For the woman?”
Trump: “Yeah, there has to be some form.”`,
        },
      ],
      lawList: [
        {
          title: `#### Convention Against Torture`,
          description: `[Art. 1](http://www.ohchr.org/EN/ProfessionalInterest/Pages/CAT.aspx) and [Art. 2](http://www.ohchr.org/EN/ProfessionalInterest/Pages/CAT.aspx): Committee Against Torture has said that prohibiting abortions and/or punishing women who have abortions constitutes inhuman treatment in violation of the Convention.`,
        },
      ],
    },
    {
      subject: `### Pregnancy and Women in the Workforce`,
      tags: ['Women', 'Pregnancy'],
      citationList: [
        {
          title: `#### [Interview](http://www.nbcnews.com/politics/2016-election/trump-2004-pregnancy-inconvenience-employers-n580366) on NBC, October 2004`,
          description: `“[Pregnancy is] a wonderful thing for the woman, it’s a wonderful thing for the husband, it’s certainly an inconvenience for a business. And whether people want to say that or not, the fact is it is an inconvenience for a person that is running a business.”`,
        },
        {
          title: `#### [Interview](http://www.cnn.com/2016/06/02/politics/trump-wife-comments-abc-interview/) on ABC News, 1994`,
          description: `“Putting a wife to work is a very dangerous thing.”`,
        },
      ],
      lawList: [
        {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `[Art. 1](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): Gives the right of self-determination and to “freely dispose of their natural wealth and resources without prejudice to any obligations arising out of international economic co-operation, based upon the principle of mutual benefit, and international law”.
[Art. 3 ](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx)and [Art. 4](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): Obligate States Parties to ensure equal rights for men and women, and circumvent gender discrimination.`,
        }, {
          title: `#### Universal Declaration of Human Rights `,
          description: `[Art. 1](http://www.ohchr.org/EN/UDHR/Documents/UDHR_Translations/eng.pdf): Everyone is “born free and equal in dignity and rights.”`,
        },
      ],
    },
    {
      subject: `### Locking Up Hillary Clinton`,
      tags: ['Hillary', 'Clinton'],
      citationList: [
        {
          title: `#### [Campaign Rallies](https://www.washingtonpost.com/news/the-fix/wp/2016/11/22/a-brief-history-of-the-lock-her-up-chant-as-it-looks-like-trump-might-not-even-try/?utm_term=.c3073b19a8ab), 2016`,
          description: `Throughout the campaign, Trump led his supporters in chants of “lock her up.”`,
        },
        {
          title: `#### [Second Televised Presidential Debate](http://fortune.com/2016/10/10/presidential-debate-trump-clinton-jail/), October 2016`,
          description: `_To Hillary Clinton:_
“If I win, I am going to instruct my attorney general to get a special prosecutor to look into your situation because there has never been so many lies, so much deception — there has never been anything like it and we’re going to have to get a special prosecutor.”`,
        },
      ],
      lawList: [
        {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `[Art. 14](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): Everyone with a criminal charge has the right to court and is innocent until proven guilty by law.
[Art. 15](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): Nobody should be punished for any act that was not criminal when committed.
[Art. 17](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): “No one shall be subjected to arbitrary or unlawful interference with his privacy, family, home or correspondence, nor to unlawful attacks on his honour and reputation” and “Everyone has the right to the protection of the law against such interference or attacks.”`,
        },
      ],
    },
    {
      subject: `### Killing the Families of Terrorists`,
      tags: ['Terrorist'],
      citationList: [
        {
          title: `#### [Interview](http://www.cnn.com/2015/12/02/politics/donald-trump-terrorists-families/) on Fox & Friends, December 2015`,
          description: `“The other thing with the terrorists is you have to take out their families, when you get these terrorists, you have to take out their families. They care about their lives, don’t kid yourself. When they say they don’t care about their lives, you have to take out their families.”`,
        },
      ],
      lawList: [
        {
          title: `#### Customary International Humanitarian Law`,
          description: `[Rule 1](https://ihl-databases.icrc.org/customary-ihl/eng/docs/v1_cha_chapter1_rule1) and [Rule 14](https://ihl-databases.icrc.org/customary-ihl/eng/docs/v1_cha_chapter4_rule14): Attacking civilians is a war crime and potential crime against humanity which violates Customary International Humanitarian Law Rule 1 on the principle of distinction, and 14 on the principle of proportionality.
[Rule 50](https://ihl-databases.icrc.org/customary-ihl/eng/docs/v1_rul_rule50): This also violates Rule 50 on the principle of necessity which prohibits destruction of an enemy’s property unless if it is “required by imperative military necessity.”`,
        }, {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `[Art. 6](http://www.ohchr.org/en/professionalinterest/pages/ccpr.aspx): Gives everyone the right to life and limits death sentences for only the “most serious crimes”.`,
        },
      ],
    },
    {
      subject: `### Executing American Citizens Bowe Bergdahl and Edward Snowden`,
      tags: [''],
      citationList: [
        {
          title: `#### Campaign Rally in Nevada, October 2015`,
          description: `“We’re tired of Sgt. Bergdahl, who’s a traitor, a no-good traitor, who should have been executed. Thirty years ago, he would have been shot.”`,
        },
        {
          title: `#### Campaign Rally in New Hampshire, August 2015`,
          description: `“So we get a traitor named Bergdahl, a dirty rotten traitor... you know in the old days, bing, bang [Trump mimes shooting a gun]. When we were strong.”`,
        },
        {
          title: `#### Interview on Fox & Friends, July 2013`,
          description: `Trump: “I think Snowden is a terrible threat, I think he’s a terrible traitor, and you know what we used to do in the good old days when we were a strong country — you know what we used to do to traitors, right?” 
Host: “Well, you killed them, Donald.” 
Trump: “Well, he is damaging America.”`,
        },
      ],
      lawList: [
        {
          title: `#### US Constitution`,
          description: `Fifth Amendment: Extrajudicial killings violate the right to due process.`,
        }, {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `Art. 6: Gives everyone the right to life and limits death sentences for only the “most serious crimes”.
Art. 14: Everyone with a criminal charge has the right to court and is innocent until proven guilty by law.`,
        }, {
          title: `#### Universal Declaration of Human Rights`,
          description: `Art. 3: Gives the right to life, liberty and security of person.`,
        },
      ],
    },
    {
      subject: `### Creating a Database of Muslims and Refugees`,
      tags: [''],
      citationList: [
        {
          title: `#### Interview on ABC News, November 2016`,
          description: `Asked if he would rule out a database on all Muslims, Trump said no, but then shifted to talking about a database of refugees.
“I want a database for the refugees that — if they come into the country. We have no idea who these people are. When the Syrian refugees are going to start pouring into this country, we don’t know if they’re ISIS, we don’t know if it’s a Trojan horse…And I definitely want a database and other checks and balances. We want to go with watch lists. We want to go with databases. And we have no choice.”`,
        },
      ],
      lawList: [
        {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `Art. 4: States that actions to protect the life of the nation must not comprise discrimination of religion. 
Art 18: Gives the right to freedom of thought, conscience and religion.
Art. 26: Prohibits religious discrimination. 
Art. 27: Gives the right to practice your own religion.`,
        }, {
          title: `#### International Convention on the Eliminate of All Forms of Racial Discrimination`,
          description: `Art. 1: Prohibits racial discrimination
Art. 2 and Art. 3: States Parties shall take action to prevent religious discrimination, racial segregation and apartheid. 
Art. 4: States Parties must convict propaganda and organizations promoting religious discrimination.
Art. 5: States Parties must ensure equal rights to everyone to eliminate racial discrimination.`,
        },
      ],
    },
    {
      subject: `### Surveilling and Closing Mosques`,
      tags: [''],
      citationList: [
        {
          title: `#### Campaign Rally in Alabama, November 2015`,
          description: `_On heavily surveilling mosques:_
“I want surveillance of certain mosques if that’s OK I want surveillance. I will absolutely take (a) database on the people coming in from Syria…If we can’t stop it — but we are going to if I win — they’re going back.”`,
        },
        {
          title: `#### Interview with Morning Joe, November 2015`,
          description: `_On shutting down some mosques:_
“I would hate to do it, but it’s something that you’re going to have to strongly consider because some of the ideas and some of the hatred — the absolute hatred — is coming from these areas.”`,
        },
      ],
      lawList: [
        {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `Art. 4: States that actions to protect the life of the nation must not comprise discrimination of religion. 
Art. 20: Prohibits religious hatred.
Art. 26: Prohibits religious discrimination. 
Art. 27: Gives the right to practice your own religion.`,
        }, {
          title: `#### International Convention on the Eliminate of All Forms of Racial Discrimination`,
          description: `Art. 1: Prohibits racial discrimination
Art. 2 and Art. 3: States Parties shall take action to prevent religious discrimination, racial segregation and apartheid. 
Art. 4: States Parties must convict propaganda and organizations promoting religious discrimination.
Art. 5: States Parties must ensure equal rights to everyone to eliminate racial discrimination.`,
        },
      ],
    },
    {
      subject: `### Banning Muslims from Entering the US using “Extreme Vetting”`,
      tags: [''],
      citationList: [
        {
          title: `#### Press conference/press release, December 2015`,
          description: `“Donald J. Trump is calling for a total and complete shutdown of Muslims entering the United States until our country’s representatives can figure out what is going on.”`,
        },
        {
          title: `#### Campaign Rally in Ohio, August 2015`,
          description: `_Trump called for:_
“extreme vetting… [for] any hostile attitude towards our country or its principles, or who believed sharia law should supplant American law. . . . Those who did not believe in our Constitution or who support bigotry and hatred will not be admitted for immigration into our country.”
“In the Cold War, we had an ideological screening test. The time is overdue to develop a new screening test for the threats we face today. . . . I call it extreme, extreme vetting.”`,
        },
      ],
      lawList: [
        {
          title: `#### Refugee Convention Art. 33 
Convention Against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment Art. 3`,
          description: `A religious bar could be held to violate U.S. obligations in individual cases under international law, including the Refugee Convention and Convention Against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment, and it would conflict with numerous U.S. statutes concerning refugee protection.
It would also violate the principle of ‘non-refoulement’ in the Refugee Convention Art. 33 and Convention Against Torture Art. 3, which states that you cannot force refugees or asylum seekers to return to a country in which they are liable to be subjected to persecution.`,
        },
      ],
    },
    {
      subject: `### Waterboarding and Torture`,
      tags: [''],
      citationList: [
        {
          title: `#### Interview on NBC, March 2016`,
          description: `“Well I’m not looking to break any news on your show, but frankly the waterboarding, if it was up to me, and if we changed the laws or have the laws, waterboarding would be fine.” 
“You know, we work within laws. They don’t work within laws — they have no laws. We work within laws. The waterboarding would be fine, and if they could expand the laws, I would do a lot more than waterboarding.”`,
        },
        {
          title: `#### Republican debate, February 2016`,
          description: `“I’d bring back waterboarding and I’d bring back a hell of a lot worse than waterboarding.”`,
        },
      ],
      lawList: [
        {
          title: `#### Convention against Torture`,
          description: `Waterboarding is an act of torture and violates the Convention against Torture.`,
        }, {
          title: `#### Customary International Humanitarian Law`,
          description: `Rule 90: Prohibits torture and inhuman treatment.`,
        },
        {
          title: `#### Geneva Conventions`,
          description: `Common Article 3: Prohibits torture and binds parties in armed conflicts to treat hostages humanely.`,
        }, {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `Art. 1 and Art. 6: “Every human being has the inherent right to life. This right shall be protected by law. No one shall be arbitrarily deprived of his life.”`,
        },
      ],
    },
    {
      subject: `### Revoking US Citizenship for Burning the Flag`,
      tags: [''],
      citationList: [
        {
          title: `#### Tweet, November 2016`,
          description: `“Nobody should be allowed to burn the American flag - if they do, there must be consequences - perhaps loss of citizenship or year in jail!”`,
        },
      ],
      lawList: [
        {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `Art.19: Gives the right to hold opinions and freedom of expression.`,
        },
      ],
    },
    {
      subject: `### Expanding Stop and Frisk`,
      tags: [''],
      citationList: [
        {
          title: `#### First Televised Presidential Debate, September 2016`,
          description: `_On expanding the use of “stop and frisk”:_
“Stop and frisk…worked very well in New York. It brought the crime rate way down. But you take the gun away from criminals that shouldn’t be having it.”`,
        },
        {
          title: `#### Interview on The O’Reilly Factor, September 2016`,
          description: `_To Bill O’Riley:_
“I never said the term Muslim…You did. You told me Muslims. I didn’t say that. I am saying you’re going to profile people that maybe look suspicious. I didn’t say they were Muslims.”`,
        },
      ],
      lawList: [
        {
          title: `#### International Convention on the Eliminate of All Forms of Racial Discrimination`,
          description: `Art. 1: Prohibits racial discrimination
Art. 2 and Art. 3: Prohibits religious discrimination, racial segregation and apartheid. 
Art. 4: Requires conviction of propaganda and organizations promoting religious discrimination.
Art. 5: States Parties must ensure equal rights to everyone to eliminate racial discrimination.`,
        }, {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `Art. 2: States Parties must ensure equal rights for everyone.
Art. 9: Gives people the right to be free of arbitrary arrest. 
Art. 20: Prohibits “advocacy of national, racial or religious hatred that constitutes incitement to discrimination, hostility or violence”.`,
        },
        {
          title: `#### Universal Declaration of Human Rights`,
          description: `Art. 2: Prohibits discrimination.`,
        }, {
          title: `#### US Constitution`,
          description: `Fifth and Fourteenth Amendments: Governments cannot discriminate.`,
        },
      ],
    },
    {
      subject: `### Shooting Iranian Boats`,
      tags: [''],
      citationList: [
        {
          title: `#### Campaign Rally in Florida, September 2016`,
          description: `“And by the way, with Iran, when they circle our beautiful destroyers with their little boats and they make gestures that our people — that they shouldn’t be allowed to make, they will be shot out of the water.”`,
        },
      ],
      lawList: [
        {
          title: `#### UN Charter`,
          description: `Art. 2: “All members shall refrain in their international relations from the threat or use of force against the territorial integrity or political independence of any state, or in any other manner inconsistent with the Purposes of the United Nations.”`,
        }, {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `Art. 20: “Any propaganda for war shall be prohibited by law.”`,
        },
      ],
    },
    {
      subject: `### Inciting Violence Against Protestors`,
      tags: [''],
      citationList: [
        {
          title: `#### Campaign Rally in Nevada, March 2016`,
          description: `_Referencing a protestor that was being ejected:_
“I’d like to punch him in the face, I’ll tell ya,”`,
        },
        {
          title: `#### Campaign Rally in North Carolina, March 2016`,
          description: `_Encouraging the crowd at his rally to vent its fury at the protesters:_
“See, in the good old days this didn’t use to happen, because they used to treat them very rough. We’ve become very weak.”`,
        },
        {
          title: `#### Campaign Rally in Michigan, March 2016`,
          description: `_Referencing a protester that was being ejected:_
“Get him out. Try not to hurt him. If you do, I’ll defend you in court.”`,
        },
        {
          title: `#### Campaign Rally in Iowa, February 2016`,
          description: `_Referencing protesters at his rallies:_
“There may be somebody with tomatoes in the audience, if you see somebody getting ready to throw a tomato, knock the crap out of them, would you? Seriously. Okay? Just knock the hell — I promise you, I will pay for the legal fees.”`,
        },
      ],
      lawList: [
        {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `Art.1: “All peoples have the right of self-determination. By virtue of that right they freely determine their political status and freely pursue their economic, social and cultural development.”
Art.19: Gives the right to hold opinions and freedom of expression.`,
        },
      ],
    },
    {
      subject: `### Using Drones to Kill Terrorist Suspects`,
      tags: ['Drones', 'Terrorist'],
      citationList: [
        {
          title: `#### [Interview](https://www.democracynow.org/2016/12/27/what_will_happen_when_donald_trump) with the Daily Mail, May 2016`,
          description: `“As far as drones are concerned, yes, to take out terrorists. The only thing is I want them to get it right. But to take out terrorists yes I think that is something I would continue to do.”`,
        },
      ],
      lawList: [
        {
          title: `#### UN Charter`,
          description: `[Art. 2](http://www.un.org/en/sections/un-charter/chapter-i/): Continued use of drone strikes violates Art. 2 on the use of force. In October, 2013, [two reports](http://www.npr.org/sections/thetwo-way/2013/10/22/239597012/u-s-drone-strikes-violate-international-law-reports-allege), one from Amnesty International and one from Human Rights Watch, found that US policy and practices for the international use of lethal force against terrorism suspects and other people who happen to be near such suspects goes far beyond what international human rights law permits.`,
        }, {
          title: `#### International Covenant on Civil and Political Rights`,
          description: `[Art. 6](http://www.ohchr.org/EN/ProfessionalInterest/Pages/CERD.aspx): These killings were found to disregard international protections for the right to life and the prohibition of the arbitrary deprivation of life. `,
        },
      ],
    },
    {
      subject: `### Shooting Russian Aircraft`,
      tags: ['Russia'],
      citationList: [
        {
          title: `#### [Interview](http://www.ibtimes.co.uk/trump-says-us-has-gotta-shoot-russian-planes-performing-barrel-rolls-if-democracy-fails-1558024) on Fort Wayne's Morning News, May 2016`,
          description: `_When questioned about the recent incidents involving Russian military aircraft speeding past U.S. navy vessels in European waters:_
“I mean, at a certain point, you have to do something... you just can’t take that... But it should certainly start with diplomacy and it should start quickly with a phone call to Putin, wouldn’t you think? And if that doesn’t work out, I don’t know, you know, at a certain point, when that sucker comes by you, you gotta shoot.”`,
        },
      ],
      lawList: [
        {
          title: `#### Customary International Humanitarian Law`,
          description: `[Rule 145](https://ihl-databases.icrc.org/customary-ihl/eng/docs/v1_rul_rule145): The use of force as a means of reprisal would be disproportionate and premature. Belligerent reprisals must be proportionate and a method of last resort.`,
        }, {
          title: `#### UN Charter`,
          description: `[Art. 2](http://www.un.org/en/sections/un-charter/chapter-i/): Requires members to solve international disagreements peacefully and avoid the use of force.
[Art. 39](http://www.un.org/en/sections/un-charter/chapter-vii/index.html), [41](http://www.un.org/en/sections/un-charter/chapter-vii/index.html), and [42](http://0.0.0.42/): The Security Council must determine measures of “threat to the peace” and to “maintain or restore international peace and security.”`,
        },
      ],
    },
    {
      subject: `### Using Nuclear Weapons`,
      tags: [''],
      citationList: [
        {
          title: `#### Interview with MSNBC, March, 2016`,
          description: `_Asked if he would drop a nuclear weapon in the Middle East:_
“Somebody hits us within ISIS — you wouldn’t fight back with a nuke?”

_Responding to a statement that no one wants to hear the US President talk about using nuclear weapons:_ 
“Then why are we making them? Why do we make them?”`,
        },
        {
          title: `#### Interview on the O’Reilly Factor, March 2016`,
          description: `_Asked about using nuclear weapons in Europe:_
“Europe is a big place. I’m not going to take cards off the table. We have nuclear capability.”`,
        },
        {
          title: `#### Interview on CBS, January 2016`,
          description: `_On using nuclear weapons:_
“Well, it is an absolute last stance. And, you know, I use the word unpredictable. You want to be unpredictable.”`,
        },
      ],
      lawList: [
        {
          title: `#### Customary International Humanitarian Law`,
          description: `Rule 1 and Rule 14: Reckless use of nuclear weapons violates Customary International Humanitarian Law Rule 1 on the principle of distinction, and 14 on the principle of proportionality, which prohibit attacks on civilians.`,
        }, {
          title: `#### International Court of Justice, Legality of the Threat or Use of Nuclear Weapons`,
          description: `The use of nuclear weapons without security council authorization or self-defense is unlawful.`,
        },
      ],
    },
  ],
};
