<template>
  <div class="container col-lg-8" id="final">
    <b-card v-if="!showQuestions" title="Tour Completed">
      <b-card-text >
        By walking this tour, you have followed the history of the forgotten buried in this cemetery. There are still many unanswered questions about how the movement of remains of the people of color plot and the city plot actually occurred. But, hopefully with time we will learn more. Click here for further research and discussion questions. 
      </b-card-text>
      <b-btn size="lg" @click="showQuestions=true" variant="info">Questions</b-btn>
    </b-card>
    <b-card v-if="showQuestions" title="Questions">
      <b-card-text>
        <b>{{ questions[question].title }}</b>
        <p>{{ questions[question].text }}</p>
      </b-card-text>
      <b-btn size="lg" @click="showQuestions=false" v-if="question ==0" variant="info">Back</b-btn>
      <b-btn size="lg" @click="question--" v-if="question !=0" variant="info">Back</b-btn>
      <b-btn size="lg" @click="question++" v-if="question!=4" variant="info">Next</b-btn>    
    </b-card> 
  </div>
</template>

<script>
  export default {
    data: () => ({
      showQuestions: false,
      question: 0,
      questions: [
      {title: 'How were the remains actually re-buried?', text: 'By 1901, there was a law dictating that cemeteries were supposed to submit paperwork in order to rebury people. City Hall does not have any such records of reinterment. Either these records were lost over time, the remains were not reburied and only the headstones were moved, the remains were moved in a non-professional fashion, or the paperwork wasn’t submitted but the remains were moved properly. Which hypothesis seems most likely to you? How would you verify this hypothesis?'},
      {title: '', text: 'We don’t know what the social status of the people of color who were buried here -- were they required to pay money? Or was this plot, like the poor people plot, free? How might you go about searching for this information? '},
      {title: 'What happened to the people who did not have headstones?', text: 'Many people -- particularly poor people and people of color -- were buried with wooden headstones that have decayed over time. The Grove Street Cemetery records hold a list of names that were buried within the City Plot and the people of color plot; but unlike the plots for white, rich people, the exact location of these people’s remains are unknown. How do we remember their history in a graveyard when we don’t know exactly where they are currently buried? How do we remember this part of our history when the general public doesn’t even know that it exists?'},
      {title: '', text: 'Should the cemetery do anything to honor the people who were moved? If so, what?'},
      {title: '', text: 'If you want to discuss further, please email us at grovestreetquestions@gmail.com.'}
      ]
    })
  }
</script>

<style>
  #final {
    height: 80vh;
  }
</style>
