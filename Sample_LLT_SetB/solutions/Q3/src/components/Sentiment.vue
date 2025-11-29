<!-- 

Name: KIM Jong Un
Email: kim.jongun.2022

 -->

<script>
export default {
    name: "Sentiment",

    data() {
        return {
            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            // journal_entry: "I am so,  angry and sad.... and upset and depressed  #)(*#@)( !! i feel terrible. but mala made me happy today. good food always makes me feel fine.",

            // YOU CAN USE THIS AS A POSITIVE TEST CASE
            journal_entry: "i feel so FINE and happy. today is a terrific fabulous day !!!!",

            // YOU CAN USE THIS AS A POSITIVE TEST CASE
            // journal_entry: "la la la ma la la hungry what to eat?",

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            sentiment_word_counts: {
                positives: 0,
                negatives: 0,
            },

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            img_src: "/img/neutral.jpg",

            // DO NOT MODIFY THIS DATA PROPERTY
            numeric_to_day: {
                0: "Sunday",
                1: "Monday",
                2: "Tuesday",
                3: "Wednesday",
                4: "Thursday",
                5: "Friday",
                6: "Saturday",
            },

            // DO NOT MODIFY THIS DATA PROPERTY
            sentiment_dictionary: {
                positives: [
                    "happy", "lucky", "jolly", "wonderful", "fantastic", "terrific",
                    "cheerful", "lovely", "loving", "beautiful", "blessed", "bless",
                    "bliss", "blissful", "brilliant", "bubbly", "cool", "cheery",
                    "charming", "delight", "delightful", "energetic", "enthusiastic",
                    "electrifying", "encourage", "encouraging", "excellent", "good",
                    "fabulous", "fine", "fun", "gorgeous", "healing", "harmonious",
                    "jovial", "joy", "joyful", "lively", "marvelous", "nice",
                    "pleasant", "pleasure", "popular", "pretty", "positive",
                    "rejoice", "rejoicing", "sparkling", "smile", "laugh",
                    "superb", "successful", "vibrant", "well", "worthy",
                ],

                negatives: [
                    "alarming", "angry", "awful", "appalling", "atrocious", "anxious",
                    "bad", "boring", "cruel", "confused", "creepy", "cry", "criminal",
                    "dead", "deprived", "dirty", "dreadful", "dread", "dreading",
                    "damage", "damaging", "distress", "depressed", "detrimental",
                    "evil", "faulty", "fault", "fail", "failure", "frightening",
                    "fear", "fearful", "filthy", "gross", "guilty", "gruesome",
                    "harmful", "hostile", "horrible", "hate", "horrendous", "hurt",
                    "hideous", "hurtful", "impossible", "insane", "lousy", "malicious",
                    "messy", "monstrous", "negative", "nasty", "naughty", "oppressive",
                    "offensive", "pain", "pessimistic", "poisonous", "rude",
                    "ruthless", "sad", "smelly", "sickening", "stupid", "savage",
                    "stressful", "substandard", "scary", "sick", "stinky", "terrible",
                    "terrifying", "threatening", "ugly", "unhappy", "unjust",
                    "unwanted", "unlucky", "unwelcome", "unwise", "unfair", "unhealthy",
                    "unpleasant", "upset", "violent", "worthless",
                ],
            },

            // DO NOT MODIFY THIS DATA PROPERTY
            regex: /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,

            // DO NOT MODIFY THIS DATA PROPERTY
            image_sources: {
                positive: "/img/positive.jpg",
                neutral: "/img/neutral.jpg",
                negative: "/img/negative.jpg",
            },
        };
    },

    //=========== COMPUTED PROPERTIES ===========
    computed: {
        greeting() {
            return "Hello " + this.numeric_to_day[new Date().getDay()];
        },
    },

    //=========== METHODS ===========
    methods: {
        process_entry() {
            console.log("=== [START] process_entry ===");

            // 1. Remove punctuation
            let clean_str = this.journal_entry.replace(this.regex, "");

            // 2. Tokenize
            let tokens = clean_str.split(/\s+/);

            // 3. Count positive & negative words
            let pos_count = 0;
            let neg_count = 0;

            const pos_dict_words = this.sentiment_dictionary.positives
            const neg_dict_words = this.sentiment_dictionary.negatives

            for (let token of tokens) {
                if (token) {
                    if (pos_dict_words.includes(token)) {
                        pos_count++
                    }
                    if (neg_dict_words.includes(token)) {
                        neg_count++
                    }
                }
            }

            // 4. Update this.sentiment_word_counts
            this.sentiment_word_counts.positives = pos_count;
            this.sentiment_word_counts.negatives = neg_count;

            // 5. Update img_src
            if (pos_count > neg_count) {
                this.img_src = this.image_sources.positive;
            } else if (pos_count < neg_count) {
                this.img_src = this.image_sources.negative;
            } else {
                this.img_src = this.image_sources.neutral;
            }

            console.log("=== [END] process_entry ===");
        },
    },
};
</script>

<template>
    <div class="container-fluid">
        <!-- Header -->
        <div class="container-fluid py-2 text-center">
            <h1>{{ greeting }}</h1>
        </div>

        <!-- Body -->
        <div class="row">
            <!-- Left Panel (journal entry) -->
            <div class="col-sm-6 p-3" style="background-color: rgb(253, 255, 155);">
                <div class="form-floating">
                    <span class="fw-bold">Journal Entry</span>
                    <textarea class="form-control" style="height: 140px" v-model="journal_entry"></textarea>

                    <hr />

                    <button type="button" class="btn btn-primary" @click="process_entry">
                        How's My Sentiment Today?
                    </button>
                </div>
            </div>

            <!-- Right Panel (sentiment word counts) -->
            <div class="col-sm-6 p-3" style="background-color: rgb(210, 247, 250);">
                <span class="fw-bold">Sentiment Words</span>

                <table class="table table-bordered border-dark">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Word Count</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(count, category) in sentiment_word_counts" :key="category">
                            <td>{{ category }}</td>
                            <td>{{ count }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Bottom -->
        <div class="row mt-3">
            <h2 class="text-center">Assessment</h2>
            <div class="col-sm-12 text-center">
                <img :src="img_src" alt="Sentiment Result" />
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
