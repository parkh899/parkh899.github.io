//
// This is to retrieve four random numbers and use it one by one until use them all. Then it gets four new numbers
//

var oldSave = [];
var newSave = [];

function getJournalEntry(type) {
	var entry, idx;
	if (type == 'old') {
		if (oldSave.length == 0)
			oldSave = threeRandomNumbers(1, oldEntries.length);
		idx = oldSave[0];   // use the first index
		oldSave.shift(); // remove the first one
		console.debug( oldSave + " - " + idx);
		entry = oldEntries[idx-1]; // return the first one
	} else if (type=='new') {
		if (newSave.length == 0)
			newSave = threeRandomNumbers(1, newEntries.length);
		idx = newSave[0];   // use the first index
		newSave.shift(); // remove the first one
		console.debug( newSave + " - " + idx);
		entry = newEntries[idx-1]; // return the first one		
	}
	return entry;
}

// I borrowd this function from the internet (http://stackoverflow.com/)
function threeRandomNumbers(start, end) {
	var limit = 8,
		amount = 8,
		lower_bound = start,
		upper_bound = end,
		unique_random_numbers = [];

	if (amount > limit) limit = amount; //Infinite loop if you want more unique
										//Natural numbers than existemt in a
										// given range
	while (unique_random_numbers.length < limit) {
		var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
		if (unique_random_numbers.indexOf(random_number) == -1) { 
			// Yay! new random number
			unique_random_numbers.push( random_number );
		}
	}
	return unique_random_numbers;
}

//
// below devides the data into two, oldEntries and newEntries for 1999 and 2014-15 photos
//

var oldEntries = [
	// 1999 places
	{"id": "op1",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Edinburgh Castle",
	 "image": "old/place1.jpg",
	 "journal": "Do you see that the castle behind. That was the very famous Edinburgh Castle which is at the center of the capital city, Edinburgh. We had been there so many times for various reasons, visiting castle, watching Military Tattoo performance, seeing fireworks, or just for some rests. Because the castle sits high on the rock, it was visible from most part of the city. Walking out of the castle meets the royal miles which is covered with stone pavement. Old kings and queens walked that road so did their families. But now you are our princess who deserve to open up your future with our blessings."
	},
	{"id": "op2",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Edinburgh, Scotland",
	 "image": "old/place2.jpg",
	 "journal": "In Scotland, we lived in Edinburgh which is the capital. The city is so old that history is alive every corners of the city. Aged dust on the buildings, walls, and monuments together with typical every day gloomy weather made the whole city a little dark and grayish. But the people walk with pride and the building shows off their history without words. Once, we too walked with them touched those buildings but did not feel that we are part of them. Somehow we had felt as if we were pilgrims who were passing by the city for other destination after short stay. However, our stay of five years weren't short at all."
	},
	{"id": "op3",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Harbor near Edinburgh",
	 "image": "old/place3.jpg",
	 "journal": "Open see broadens your heart and mind. Whenever you put your eyes on the horizon, you suddenly feel so small. But this is a moment when you become again who you are and make yourself humble. Along the coast line near Edinburgh, there are so many beautiful harbors where you where you can sit and enjoy all the nature surround you including the open see which make you humble all the time."
	},
	{"id": "op4",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Ruins of palace",
	 "image": "old/place4.jpg",
	 "journal": "The palace, once was beautiful one, now stands as ruins deserted. Those ruins always remind me that nothing will last forever. Our life changes over the time in various ways, sometime positively other times negatively. But remember that those are not going to last forever too. So be humble when you are joyful and be patient when you are struggle. Just never give up and continuously look ahead for the hope."
	},
	{"id": "op5",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Fireworks from the Edinburgh Castle",
	 "image": "old/place5.jpg",
	 "journal": "Open see broadens your heart and mind. Whenever you put your eyes on the horizon, you suddenly feel so small. But this is a moment when you become again who you are and make yourself humble. Along the coast line near Edinburgh, there are so many beautiful harbors where you where you can sit and enjoy all the nature surround you including the open see which make you humble all the time."
	},
	{"id": "op6",
	 "year": 1999,
	 "vertical": "no",
	 "title": "March of bagpipe band",
	 "image": "old/place6.jpg",
	 "journal": "One of the most wonderful scene you frequently see in Scotland is playing bagpipes, sometimes by one man at the street corner other times by many in a marching band. Celtic melodies somehow have power to touch and move your mind. Whether you attend Burn's Night to celebrate poet Robert Burns or walk along streets you always hear the sound of bagpipe from near or a far. Even now, I can easily hear and see it in my mind whenever I recall the beautiful memories related to Scotland."
	 },
	{"id": "op7",
	 "year": 1999,
	 "vertical": "yes",
	 "title": "Castle in spooky moon light",
	 "image": "old/place7.jpg",
	 "soundId": "old_place7",
	 "journal": "Long history of Scotland has made so many legends over her history. Some of those are about ghosts of various kinds. In many cases, they are related to castles, moon, or dark nights. This may not be the best picture to give you some clues about the scenes related to those stories. But it looks like spooky enough to stimulate your curiosity to know more about those stories."
	 },
	 {"id": "op8",
	 "year": 1999,
	 "vertical": "yes",
	 "title": "Big Ben",
	 "image": "old/place8.jpg",
	 "soundId": "old_place8",
	 "journal": "On our trip to London, we expected to visit and see many places, London Bridge, Big Ben, and much more. In this picture stands tall beautiful tower with a huge clock. This is the very famous clock, called Big Ben. Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster."
	 },
	 {"id": "op9",
	 "year": 1999,
	 "vertical": "yes",
	 "title": "Leaning Tower of Pisa",
	 "image": "old/place9.jpg",
	 "soundId": "old_place9",
	 "journal": "Our trip to Italy was amazed by a lot of places to see. Leaning Tower of Pisa is one of them. It was known worldwide for its unintended tilt to one side. The tower's tilt began during construction, caused by an inadequate foundation on ground too soft on one side to properly support the structure's weight. The tilt increased in the decades before the structure was completed, and gradually increased until the structure was stabilized."
	 },
	 {"id": "op10",
	 "year": 1999,
	 "vertical": "yes",
	 "title": "Eiffel Tower",
	 "image": "old/place10.jpg",
	 "soundId": "old_place10",
	 "journal": "When Gustave Eiffel’s company built Paris’ most recognizable monument for the 1889 World’s Fair, many regarded the massive iron structure with skepticism. Today, the Eiffel Tower, which continues to serve an important role in television and radio broadcasts, is considered an architectural wonder and attracts more visitors than any other paid tourist attraction in the world."
	 },
	 {"id": "op11",
	 "year": 1999,
	 "vertical": "no",
	 "title": "View from Edinburgh Castle",
	 "image": "old/place11.jpg",
	 "journal": "When you stand on a view in Edinburgh Castle, these are what you will see, Carlton Hill a far, Walter Scott Monument, Waverley Strain Station, National Art museum of Scotland and the horizon of the sea. Having lived more than five years in this city, I still remember every streets and path ways to navigate all these beautiful architectures. What a lovable city it is."
	 },
	// 1999 family
	{"id": "of1",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Once you were little",
	 "image": "old/family1.jpg",
	 "journal": "Once your were so cute that you were an apple to my eyes. We took so many pictures of you where ever we went, they added quite weights on our luggage when we moved to the USA. All the hats and clothes you wore are coordinated by your mom out of love and they made you even cuter."
	},
	{"id": "of2",
	 "year": 1999,
	 "vertical": "yes",
	 "title": "Hand-in-hand made your walk easy",
	 "image": "old/family2.jpg",
	 "soundId": "old_family2",
	 "journal": "See how little you were when you were a little less than two years old. Your height was shorter than half of your mom's. You were so light that we carried you in our bosom all the time. Once in a while, we had let you stand on the ground to feel the world but always with your hands attached to ours. Though you are now taller than your mom, you should remember that once you were this little kid so adorable."
	},
	{"id": "of3",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Dad and I",
	 "image": "old/family3.jpg",
	 "journal": "See how rustic the jacket is that your dad wore. And do you see how much hairs had he had? Over the two decades a lot have happened and changed. you that small in the picture now has grown up to be a college student. The man sitting beside you doesn't look like as young man any more. As you have been growing up, we have been growing old. The life doesn't look the same any more but there are some that never been changed may be never going to be changed. We have been with you all the time and so you have been. Whether we are together or apart, we as a family are always connected now and then."
	},
	{"id": "of4",
	 "year": 1999,
	 "vertical": "no",
	 "title": "With Grandma in Scotland",
	 "image": "old/family4.jpg",
	 "journal": "Your Grandma visited us and you had so much wonderful time with her. Of course, I would not remember anything. That's why I took this picture as an evidence of one moment. One day we took her to the city centre and for city tour. On the double decker, she looked happier with you sitting next to. I just want to tell you again that you were loved by so many including grand parents."
	},
	{"id": "of5",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Learning from Mom",
	 "image": "old/family5.jpg",
	 "journal": "You mom never stop teaching you whenever she could. I don't remember what she was teaching you on that day. But she was focused on you something even in front of such a beautiful building as you can see in the picture. You were also so curious to know about anything. Though, that enthusiasm has been faded somewhat we hope you keep on escalating your curiosity for the rest of your life because curiosity is one of the very best motivations that will make who you are going to be."
	},
	{"id": "of6",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Facing the world",
	 "image": "old/family6.jpg",
	 "journal": "Your are so small in the world. As big trees surround you, there are so many bigger, wilder, tougher things in the world. But do not worry. We will be with you all the time. We will embrace with you whenever you stretch and open your arms wide. Be brave and face the world without intimidation nor hesitation."
	},
	{"id": "of7",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Cow Gate Nursery School",
	 "image": "old/family7.jpg",
	 "journal": "The small grey building behind you with clock tower is Cow Gate Nursery School where you started your first education. You picked up the Scottish accent very quickly as you develop language at that school. Though you now lost all the accent and only speak American English, once you were speaking British English."
	},
	{"id": "of8",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Peaceful harbor near Edinburgh",
	 "image": "old/family8.jpg",
	 "journal": "How many times we visited this small harbor. Beautiful old houses, curved sandy beach, rocky area where you can explore see creatures... This was one of favourite places we used to visit together with a ruined castle near by. We picked up shellfish, played with waves, walked along the beach. looked to the endless horizon on a rock. Look how innocent your face looks."
	},
	{"id": "of9",
	 "year": 1999,
	 "vertical": "yes",
	 "title": "In front of ruins by the sea",
	 "image": "old/family9.jpg",
	 "soundId": "old_family9",
	 "journal": "Do you know why all our family are not on pictures at the same time? No matter what pictures you look at, I was always there taking pictures. When we visit this ruined castle by the sea, we has rare chance to ask other visitor to take a picture of us. Here we go all in the same picture. Once you enter the gate behind, there is a spacious yard that face the very steep cliff on one side. Whenever we visit near by this area, we always visit this place, which amazed us every time without fail."
	},
	{"id": "of10",
	 "year": 1999,
	 "vertical": "no",
	 "title": "Ediinburgh Garden",
	 "image": "old/family10.jpg",
	 "journal": "This is the place we visited most often while we live in Edinburgh, huge garden in front of Edinburgh Castle. Flower gardens, Walter Scott Monument, big green pastures, there are all part of the garden. The other side of the garden faces Princess Street where a lot of shops lined up. Though we warded you not to feed pigeons, you enjoyed it so much that you almost throw out most of your snack in your hand. Your mischievous faces explains it very well."
	}
];

var newEntries =[
	// 2014-2015 places
	{"id": "np2",
	 "year": 2014,
	 "vertical": "no",
	 "title": "Hollywood California",
	 "image": "new/place2.jpg",
	 "journal": "Winter break in Cali: Day 4. Decided to hike up the Hollywook sign today. 2 hours total of walking up and down to see the sign and back with no water.. One of my greatest accomplishments."
	},
	{"id": "np3",
	"year": 2015,
	 "vertical": "no",
	 "title": "Central Park, New York",
	 "image": "new/place3.jpg",
	 "journal": "First time coming to Central Park since fall semester has started. It's so interesting to be in New York and come to places like these. Looking across the water and just staring fills my mind with so many thoughts but allows my mind to be free at the same time. I never want this atmosphere to leave me. I know that once I leave here today and take the subway back to my apartment, I will go back to the reality of school.. <i> Can I just..stay here forever? <i/> "
	},
	{"id": "np4",
	 "year": 2014,
	 "vertical": "yes",	 
	 "title": "Acadia Nation Park in Maine",
	 "image": "new/place4.jpg",
	 "soundId": "new_place4",
	 "journal": "Summer vacation in Maine. This year we decided to go camping and near our site was this lake. I've been to Maine before, but coming again after a couple years, the beauty and peacefulness is the same. Looking at this photo, I can almost bring myself back to *"
	},		
	{"id": "np6",
	 "year": 2015,
	 "vertical": "yes",
	 "title": "Union sq",
	 "image": "new/place6.jpg",
	 "soundId": "new_place6",
	 "journal": "I walk past this place everyday on my way to school, too many times that I lost track. Today in particular, these buildings caught my eye. Maybe because the colors of these dim, grey buildings mirrored my feelings. Usually walking to school is tiring, but today it was a time to think myself and get a breath of fresh air."
	},
	{"id": "np8",
	 "year": 2015,
	 "vertical": "no",
	 "title": "LACMA",
	 "image": "new/place8.jpg",	
	 "journal": "Lights. Without lights what would this world be? The lights in the picture could have many different meanings. I see these lights as things in my life. I could relate it to my happenings. Sometimes, our lights turn on one at a time and as one light turns off, others turn on. Lights that turn off are the things we lose. New lights represent new doors of opportunity that open up."
	},
	{"id": "np9",
	 "year": 2014,
	 "vertical": "no",
	 "title": "Home Sweet Home",
	 "image": "new/place9.jpg",
	 "journal": "It is fall once again. Looking at the change in colors and how the seasons change, lets me look back/reflect on myself and how I have changed as well. Already it is nearing the end of fall semester of my Sophomore year in college. Where did the time go? No one knows.. As I am looking across my backyard at this scenery, a sense of familiarity washes over me. Throughout my high school years, I believe every year around this time, I would come out here to see the colors of the leaves change. I guess it's much more meaningful to come to it again as I left for college. It's as if an absence in my heart is filled once again. I know that once I return back to New York City, I'll be nostalgic of this feeling once again."
	},
	{"id": "np11",
	 "year": 2015,
	 "vertical": "no",
	 "title": "My new coffee discoveries",
	 "image": "new/place11.jpg",
	 "soundId": "new_place11",
	 "journal": "My mom is a coffee lover. Every morning, she needs her dose of coffee to start her day and in between she'll have a few cups as well. In high school, I would always sip some of her coffee but come to have a bitter expression because she drank her coffee black. It tasted like sour soy sauce tea to me.. So, I didn't drink coffee much back then. Or my mom would tell me not to, only occasionally. Coming to New York City, I came to realize how many different coffee shops there are. My taste for coffee has come to grow, and I even acquired a taste for dark, black coffee. Living in NYC for about 2 years now, I am continuing to explore cute coffee places nearby. City of Saints (pictured in photo) is one coffee shop I happened to go with my friend to catch up on life. One small mocha was about $6 but definitely worth it once in a while. Deep conversations, and good coffee and cute cafes always make me happy."
	},
	{"id": "np12",
	 "year": 2015,
	 "vertical": "no",
	 "title": "Urth Cafe",
	 "image": "new/place12.jpg",	
	 "journal": "Cali. Good vibes. Quality time with friends. Cute cafe, awesome brunch. A relaxing day in Cali during winter break. So glad to be away from school, from New York City and the cold weather there.. I love cute brunch times like these, and this day was just that."
	},
	{"id": "np13",
	 "year": 2015,
	 "vertical": "no",
	 "title": "Night Lights in the City",
	 "image": "new/place13.jpg",	
	 "journal": "Came up to the rooftop of my apartment. It's so nice to be here once in a while. Lately, things have been so stressful and a lot of burden has been placed upon my shoulders. Coming here, I'm able to let some of that frustration out.. I can even talk to myself or cry and not have anyone judge me.. Looking down at the view below me, I feel so small to be up here. The vast city makes me feel like an ant standing up here on this rooftop. Sometimes I contemplate about how even me coming to New York City has a purpose.. I have yet to find that full purpose that God has for me, but I know that there is one for sure. Tonight, I took this alone time up here to pray to Him to comfort me during these times."
	},
	{"id": "np14",
	 "year": 2015,
	 "vertical": "no",
	 "title": "Grandma",
	 "image": "new/place14.jpg",	
	 "journal": "I love my grandma. Although we are miles apart, she continues to send me letter from time to time. I can feel her unconditional love all the way from Korea as I receive these letters. Her letters are so full of depth and knowledge. I still recall the time she visited America 4 years ago and the time that I went to Korea 2 years ago. Those memories are ones that are unforgettable and I wish to have more with her if time permits. Her presence in my life is so meaningful to me. She is my role model."
	},
	{"id": "np15",
	 "year": 2015,
	 "vertical": "no",
	 "title": "Mother",
	 "image": "new/place15.jpg",	
	 "journal": "Thankful for my mama who came to visit me on her day off.  It's been a rough semester, and I was feeling a little homesick. To cheer me up, she took a 2 and a half hour bus ride to visit me. For Mother's Day coming up, I surprised her with tulips and a card. I love my mother and the closeness of our relationship that has continued to grow over the years. "
	},
	{"id": "np16",
	 "year": 2015,
	 "vertical": "no",
	 "title": "Found in Translation",
	 "image": "new/place16.jpg",	
	 "journal": "A typography exhibit called <i>Found In Translation</i> in SOHO. I am continually inspired by the newfound artists. I hope to discover more galleries such as these and gain my inspiration from them as I continue my art career. "
	},
	{"id": "np17",
	 "year": 2015,
	 "vertical": "no",
	 "title": "Happy New Years",
	 "image": "new/place17.jpg",	
	 "journal": "Spent New Years Eve with the parents and made dumplings. It is times like these that I truly cherish. Nothing makes me feel more at home than quality time with my parents. Seeing all of our hands in sync as we made each and every dumpling fascinates me. After making 3 batches, my mom boiled some for me to taste. Truly, there is nothing more delicious than my mother's cooking. <i> Take some dumplings when you go back to New York City </i> my mom would say.."
	},
	{"id": "np18",
	 "year": 2015,
	 "vertical": "no",
	 "title": "Inspiration",
	 "image": "new/place18.jpg",	
	 "journal": "Took my day off to come to Dashwook Books for a class assignment. Unexpectedly, I was so fascinated by the small store and endless amount of photo-books here. Definitely a place to come again on my own time to enjoy all the inspirational books."
	},
	{"id": "np22",
	 "year": 2015,
	 "vertical": "yes",
	 "title": "Acting at the riverbank",
	 "image": "new/place22.jpg",	
	 "journal": "journal 22 here."
	},
	{"id": "np23",
	 "year": 2015,
	 "vertical": "no",
	 "title": "My dear friend",
	 "image": "new/place23.jpg",	
	 "journal": "Coming home to six pack laughs with this one. So thankful for her. One year of living with her has definitely grown our friendship in ways I never knew before. What started off as just a <i> Hello my name is.. </i> at a dorm event led us to being the best friends now. Oh how much the times have past and we have changed. Excited to see what is in store for us in the next few years as we witness each others growth."
	},
	{"id": "np24",
	 "year": 2015,
	 "vertical": "no",
	 "title": "Ray of sun light on a hash winter day",
	 "image": "new/place24.jpg",	
	 "journal": "5:00 AM. Last day being home for winter break before I leave for Cali.. Today, I woke up and the sunrise caught me by surprise. I wondered to myself <i> Why haven't I ever noticed this before? </i> But then I realized I never wake up early enough to see it. This picture doesn't do justice as to the beautiful sunrise I encountered through the window.. A sad feeling, to have stayed at home for so short, and for me to go back to NYC after my stay in Cali.. <i> I will miss this.. </i> Until next time.."
	},
	{"id": "np25",
	 "year": 2015,
	 "vertical": "yes",
	 "title": "Boarding pass to California",
	 "image": "new/place25.jpg",	
	 "journal": "journal 25 here."
	},
	{"id": "np26",
	 "year": 2015,
	 "vertical": "yes",
	 "title": "Water fountain in Manhattan",
	 "image": "new/place26.jpg",	
	 "journal": "journal 26 here."
	},

	// 2015-2015 family
	{"id": "nf1",
	 "year": 2015,
	 "vertical": "yes",
	 "title": "Mom and I",
	 "image": "new/family1.jpg",
	 "soundId": "new_family1",
	 "journal": "Like mother like daughter. My mother is my best friend. I may have caused her trouble when I was younger, but over the years our relationship has grown strong. Thankful for someone like her to always listen to me and be there me through thick and thin. Everywhere we go, my mom would always get compliments and people often asked if we were sisters. I would often jokingly <i> get jealous </i> but I am so proud to have such a beautiful and healthy mom."
	},
	{"id": "nf2",
	 "year": 2015,
	 "vertical": "no",
	 "title": "Oh, my sweet family",
	 "image": "new/family2.jpg",
	 "journal": "Family. Something so precious to me. This photo marks a special day when my brother came home for the holidays. What a blessed time it is to have the whole family spend some quality time together. In this photo, we may seem like any other happy family, but in reality this hug from my brother was quite a surprise and out of the ordinary. A delightful yet unexpected surprise. Thankful that God has blessed me with this time to spend with them."
	},
	{"id": "nf3",
	 "year": 2015,
	 "vertical": "yes",
	 "title": "Meet parent in Manhattan",
	 "image": "new/family3.jpg",
	 "soundId": "new_family3",
	 "journal": "Parents took a day to visit me and bring me food. Coming out of the car, my mom had a brought a cool box ful of frozen meat and Korean food that I could easily defrost and cook. Truly thankful for them in my life. The absence of them after coming to college definitely makes me miss them more and  "
	},
	{"id": "nf4",
	 "year": 2015,
	 "vertical": "no",
	 "title": "Dad and I",
	 "image": "new/family4.jpg",
	 "journal": "Everyone always tells me that I look just like my dad. When I was younger, I heard it all the time, everywhere I went. I never liked hearing it because I wanted to look like my mom more. Now, I'm okay with hearing that. Instead of just looking like him, I hope to be like him as well. My mother always tells me, <i> There's no one like your father. </i> I would always just nod like I knew already. Now, I come to realize more how true that statement is. My dad is my role model, and he is always there to help me with anything. Thankful to have someone so awesome as my Dad. Looking at this picture, we really do look alike.. I think it's no coincidence that we made the same facial expression.. Like father like daughter."
	},
	{"id": "nf5",
	 "year": 2015,
	 "vertical": "yes",
	 "title": "Happy Birthday Dad",
	 "image": "new/family5.jpg",
	 "soundId": "new_family5",
	 "journal": "New family5 journal goes here."
	},
	{"id": "nf6",
	 "year": 2015,
	 "vertical": "no",
	 "title": "An unexpected surprise",
	 "image": "new/family6.jpg",
	 "journal": "A very unexpected letter in the mail. So blessed to have this friend send me a postcard of encouragement all the way from Spain. Distance really does make the heart grow fonder... The beginning of our awkward friendship, came a long way to develop in ways beyond our effort. Gods love was so centered in it and it still is. To have this sister in my life, I am grateful."
	}
];


