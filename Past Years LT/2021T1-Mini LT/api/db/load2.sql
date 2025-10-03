drop database if exists oscars;

create database oscars;

use oscars;

CREATE TABLE if not exists `winner` (
  `id` integer NOT NULL,
  `image` varchar(256) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `name` varchar(256) NOT NULL,
  `year` integer NOT NULL,
  `title` varchar(256) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;


insert into winner values (7,'james_stewart.jpg', 'M', "James Stewart", 1940, "The Philadelphia Story", "Stewart plays Mike Connor, a tabloid journalist who romances a wealthy socialite. The win was seen by many as a consolation prize for Stewart losing the previous year for 'Mr. Smith Goes to Washington.' Stewart himself believed that his Oscar should have gone to Henry Fonda for 'The Grapes of Wrath.'");

insert into winner values (35,'kathy_bates.jpg', 'F', "Kathy Bates", 1990, "Misery", "Bates won for her iconic performance as Annie Wilkes, a murderous nurse who kidnaps and tortures her favorite author in this adaptation of the novel by Stephen King.");

insert into winner values (36,'emma_thompson.jpg', 'F', "Emma Thompson", 1992, "Howards End", "Thompson won her first Oscar for her portrayal of an independent and forward-thinking woman in turn-of-the-century England. Thompson later won an Oscar for her screenplay for “Sense and Sensibility,” making her the only person to win for both acting and writing.");


insert into winner values (14,'george_c_scott.jpg', 'M', "George C. Scott", 1970, "Patton", "Scott refused to accept his Oscar for playing the larger-than-life World War II general, claiming that the Oscars were an unseemly affair and calling the entire ceremony a 'goddamn meat parade.'");

insert into winner values (15,'jack_nicholson.jpg', 'M', "Jack Nicholson", 1975, "One Flew Over the Cuckoo's Nest", "After several nominations in this category, Nicholson won playing the rebellious Randle Patrick McMurphy in this adaptation of Ken Kesey's classic novel. The film is one of only three to win Oscars for Picture, Actor, Actress, Director and Screenplay.");


insert into winner values (20,'tom_hanks.jpg', 'M', "Tom Hanks", 1993, "Philadelphia", "Hanks won his first of two consecutive Best Actor Oscars for playing a gay lawyer suffering from AIDS who sues his employers for wrongful termination.");



insert into winner values (23,'joan_fontaine.jpg', 'F', "Joan Fontaine", 1941, "Suspicion", "Fonatine plays a spinster who becomes the target of a con man in this romantic thriller directed by Alfred Hitchcock.");

insert into winner values (24,'ingrid_bergman.jpg', 'F', "Ingrid Bergman", 1944, "Gaslight", "Bergman's first Oscar was for her role as a wife who is manipulated into insanity by her cruel husband.");


insert into winner values (29,'glenda_jackson.jpg', 'F', "Glenda Jackson", 1970, "Women in Love", "Jackson's first Oscar was for her role as a mercurial artist in a tormented relationship in this adaptation of the novel by D.H. Lawrence.");



insert into winner values (32,'jane_fonda.jpg', 'F', "Jane Fonda", 1978, "Coming Home", "Fonda's second Oscar was for her role as a military wife who has an affair with a paralyzed veteran (Best Actor winner Jon Voight).");


insert into winner values (41,'joaquin_phoenix.jpg', 'M', "Joaquin Phoenix", 2019, "Joker", "Phoenix swept the precursors on his way to a career-first victory for playing Arthur Fleck, a troubled loner who becomes the killer clown known as Joker.");

insert into winner values (44,'eddie_redmayne.jpg', 'M', "Eddie Redmayne", 2014, "The Theory of Everything", "Redmayne plays renowned scientist Stephen Hawking in this biopic that focuses on Hawking's relationship with his ex-wife Jane (played by Best Actress nominee Felicity Jones).");

insert into winner values (45,'colin_firth.jpg', 'M', "Colin Firth", 2010, "The King's Speech", "Firth stars as King George VI, the reluctant British monarch struggling with a stuttering problem, in this Best Picture Oscar winner.");

insert into winner values (46,'jeff_bridges.jpg', 'M', "Jeff Bridges", 2009, "Crazy Heart", "After four previous nominations, Bridges won his first Oscar as a troubled, alcoholic, Country singer seeking redemption.");

insert into winner values (47,'forest_whitaker.jpg', 'M', "Forest Whitaker", 2006, "The Last King of Scotland", "Whitaker won his Oscar for playing the bloodthirsty and maniacal Ugandan president, Idi Amin.");

insert into winner values (48,'jamie_foxx.jpg', 'M', "Jamie Foxx", 2004, "Ray", "Foxx dominated the awards derby for his intense performance as the legendary R&B singer in Taylor Hackford's Oscar-nominated biopic.");



insert into winner values (57,'jon_voight.jpg', 'M', "Jon Voight", 1978, "Coming Home", "Voight's Oscar was for his role as a crippled and angry Vietnam veteran who finds comfort in the arms of a military wife played by Jane Fonda, who won the Best Actress award that year for her role.");


insert into winner values (59,'marlon_brando2.jpg', 'M', "Marlon Brando", 1972, "The Godfather", "Brando refused to accept his Oscar for his iconic role as mob boss Vito 'Don' Corleone due to his disapproval of the manner in which Native Americans were portrayed by Hollywood. Instead, he sent Native American actress and activist Sacheen Littlefeather to make an onstage statement, which prompted the Academy to end its longstanding tradition of proxy acceptance speeches.");


insert into winner values (64,'emma_stone.jpg', 'F', "Emma Stone", 2016, "La La Land", "Stone plays Mia, an aspiring actress who falls in love with a jazz pianist (Ryan Gosling), in this LA-based musical from Damien Chazelle. The film infamously was named Best Picture incorrectly by presenters Faye Dunaway and Warren Beatty, when actually 'Moonlight' had prevailed.");

insert into winner values (65,'brie_larson.jpg', 'F', "Brie Larson", 2015, "Room", "Larson dominated the awards circuit for her portrayal of a mother who tries to shelter her son (Jacob Tremblay) from the reality that they are held captive in a tiny room.");


insert into winner values (68,'jennifer_lawrence.jpg', 'F', "Jennifer Lawrence", 2012, "Silver Linings Playbook", "Lawrence won her Oscar for her portrayal of Tiffany, a young, mentally unstable widow who teams with a bipolar divorcee (Best Actor nominee Bradley Cooper) to enter a dance competition.");

insert into winner values (69,'natalie_portman.jpg', 'F', "Natalie Portman", 2010, "Black Swan", "Portman's Oscar was for her role as a young dancer who loses her identity and her sanity in her quest to play the principal role in 'Swan Lake.'");


insert into winner values (72,'reese_witherspoon.jpg', 'F', "Reese Witherspoon", 2005, "Walk the Line", "Witherspoon plays June Carter Cash in this drama that chronicles the rise of legendary Country singer Johnny Cash (Joaquin Phoenix) and the beginnings of his relationship with June.");

insert into winner values (73,'julia_roberts.jpg', 'F', "Julia Roberts", 2000, "Erin Brockovich", "The star of \"Pretty Woman\" and \"My Best Friend's Wedding\" won her Oscar for her portrayal of a single mom turned consumer advocate who takes on a large energy corporation that is poisoning local residents.");

insert into winner values (78,'sally_field2.jpg', 'F', "Sally Field", 1979, "Norma Rae", "Field's first Oscar was for her role as a factory worker who fights to create a labor union at a North Carolina textile factory.");


insert into winner values (85,'loretta_young.jpg', 'F', "Loretta Young", 1947, "The Farmer's Daughter", "Young, a former child star, won her Oscar for playing a maid who develops political ambitions after she begins working for a congressman.");

insert into winner values (86,'olivia_de_havilland.jpg', 'F', "Olivia de Havilland", 1946, "To Each His Own", "De Havilland's first Oscar was for her role as woman who gives up her children for adoption and spends the rest of her life trying to find redemption.");


insert into winner values (94,'denzel_washington.jpg', 'M', "Denzel Washington", 2001, "Training Day", "After winning a Supporting Actor statue for 'Glory' in 1989, Washington won his first Best Actor prize playing a corrupt Los Angeles narcotics officer.");

insert into winner values (95,'kate_winslet.jpg', 'F', "Kate Winslet", 2008, "The Reader", "On her sixth nomination, Winslet won her first Oscar for playing an illiterate German woman whose actions have devastating consequences for her young suitor.");

insert into winner values (96,'meryl_streep2.jpg', 'F', "Meryl Streep", 2011, "The Iron Lady", "Oscar's most nominated actress won her first statue in 29 years for her role as British Prime Minister Margaret Thatcher. It was Streep’s third Oscar win overall, and her second win in this category.");



insert into winner values (105, 'shar_williams.jpg', 'M', "Shar Williams", 1943, "Cyber War", "Hailing from Myanmar, a newcomer Shar won the hearts of all Americans with his brave and brilliant horse-riding stunts in the movie Cyber War depicting a futuristic world of Year 2020 where the world is overtaken by the aliens from Neptune and Pluto.");

insert into winner values (106, 'yimeng_roosevelt.jpg', 'F', "Yimeng Roosevelt", 1941, "Colonial Transformation", "Amidst the Nazi expansion in the West and the Japanese invasion in the East, Yimeng unleashes brilliant acting skills as a double spy! 'Every scene where I had to run on high heels, I was prepared to take a fall or injure my ankles. But I am super nimble - nothing could hurt me!'");

insert into winner values (107, 'layfoo_grabowski.jpg', 'M', "Layfoo Grabowski", 1949, "Shut Up", "Layfoo's Oscar was for his role as a tough high school teacher in a rural coal mining town in Colorado in the middle of recovering from the World War II which killed millions of people world-wide. Said with such a cheering spirit, Layfoo's 'Shut Up' almost sounded like 'Cheer Up.'");

insert into winner values (108, 'phris_coskitt.jpg', 'M', "Phris Coskitt", 1972, "Beer on the Moon", "Obsessed with craft beer and the space race, American Phris Coskitt successfully convinced the US NASA to onboard his very own craft beer brewing kits on Apollo 13. 'It is my dream to have craft beer named after myself to be the first alcoholic drink to be served on the Moon.' His dream is yet to be achieved as the Apollo 13 mission failed due to malfunctioning and in fact, the entire Apollo mission folded permanently in 1972.");

insert into winner values (109, 'kyong_foster.jpg', 'M', "Kyong Foster", 1975, "Cat Whisperer", "The mother of a severely traumatized son enlists the aid of a unique cat trainer to help the boy's equally injured cat. It is widely known that during the filming of the movie, Kyong Foster attracted all kinds of stray cats mysteriously appearing from nowhere making the 'V' sign with their tiny fingers whenever the director shouted 'Action!'");