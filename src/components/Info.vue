<template>
  <div>
    <b-card class="text-left">
    <b-card-text>{{info[marker].first}}</b-card-text>
    <div v-if="marker ==1">
      <b-card-text>{{info[marker].second}} </b-card-text>
    </div>
    <div v-else>
      <b-card bg-variant="light">
        <b-card-text> {{info[marker].quote}} </b-card-text>
      </b-card>
    </div>

    <b-card-text> {{info[marker].third}} </b-card-text>
    <b-card-text> {{info[marker].fourth}} </b-card-text>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'Info',
   data: function() {
       return {
         info: [
          {first: '', second: '', third: '', fourth:''}, 
        {first: 'Here is the original plot designated for people of color in the Grove Street Cemetery in 1796 when the cemetery first opened. Upon the cemetery’s creation, there were several segregated parts of the cemetery. In addition to the plot separated for people of color, there were plots owned by the City to bury individuals who could not afford to be buried in a family plot. There were also plots for religious groups and Yale College.', 
          second: 'As you can see before you, there are very few headstones memorializing the people of color buried here. It is likely that these headstones were made of wood and eroded over time. ',
          third: 'But this was not the only place that people of color were buried in the cemetery. In 1814, the cemetery expanded, and a new plot of land was designated as the plot for people of color.',
          fourth: 'Follow the map to find this new location.'},  
        {first: 'If you are facing west, you are looking at the plot designated for people of color starting in 1839. If you face east, you are looking at a plot originally owned by the City. This plot was designated for people who could not afford their own burial. In the meeting notes of the proprietors, a historical document in the archives of the New Haven Museum, this plot is described as follows:', 
          quote: '“Be it remembered that the lots and parts of lots in the north westerly  section of the burying ground ... belong to the common burying ground. Whoever may have taken hold of said lots have no title, they have no deeds (nor can have any at present as the ground was previously sequestered for common use) they have paid no money and if any persons have caused their names to be painted on the lots or have erected monuments they have no exclusive right to use them, and all other persons have a right to use them as a common burying ground… Likewise all the fenced lots in the tract appropriated for the colored people at the northwest corner of the yard are common lots, no deeds have been given, and no money has been received for any of the said lots.”', 
          third: 'Compare this description to what you see today. Something doesn’t seem right. These graves seem like private family lots, not public burying grounds. That is because in 1897, the city plot and people of color plot were drastically changed.',
          fourth: 'Walk to the next location to read the meeting notes describing this change and find out what happened next.'},
        {first: 'In January 1897, the secretary of the Standing Committee of the cemetery, Edward Beecher, proposed a “radical move in the way of improvements” to the cemetery. He suggested:',
          quote: '“that it was practical and feasible to consider seriously that the proprietors should avail themselves the income and improvement which would accrue from the sale of lots which could be utilized by a removal of the remains buried in those plots originally set apart as a place of burial for People of Color and City square in the northwesterly side of Sycamore Ave used for a place of burial of strangers and “The Potters Field” and to reinter [re-bury] those remains in the plot on the easterly side of Sycamore Ave which has also been used as a place for the Burial of Strangers and familiarly known as a potters field. There having been no interments in these lots for many years, then to improve the same and to put them into shape for sale. The foregone plan appearing feasible to the Committee after full discussion the following vote presented by Mr. Hotchkiss was unanimously adopted.”',
          third: 'Essentially by the turn of the twentieth century, the cemetery was becoming crowded. So, in order to afford the costs of maintaining the grounds, the cemetery needed to continue to sell lots. The proprietors could not sell the lots that had existing owners because the cemetery did not formally own those sections of the land. However, there were no owners of the city plot and the people of color plot. It appears the proprietors decided to consolidate the city lots and the people of color plot into one. Then, they could have more plots to sell. Unfortunately, this movement is not very well documented in historical records. What you see before you is most likely where the remains and headstones were moved.',
          fourth: 'But, this doesn’t seem right either. This doesn’t look like a public burying ground. Well, that’s because according meeting notes from 1901, the headstones and remains of the city plot and people of color were moved again. Go to the next location to read these meeting notes and learn more about this second movement.'},
        {first: 'According to the meeting notes of Nov 25th, 1901: it was',
          quote: '"Voted that the removal of the remains and the stones from the east side of Sycamore Ave (temporarily placed there) for the reclaiming of land in that quarter by special act of the General Assembly of the State of Connecticut to the rear of the lots on Ivy Path north east tier is hereby confirmed and approved.”',
          third: 'So in 1901, the remains and headstones were moved again to this place in the cemetery.  This appears to be the final resting place of many people of color and people who did not own their own family plots.',
          fourth: 'If you look through this section of the cemetery you will find the graves of Rev. George Harris and Hetty Van Blank, two people of color whose remains have been in three different places in the cemetery!  They were both originally buried in the Northwesterly corner of the cemetery, then moved to Sycamore Ave plot, and finally moved here.'}]

       }
   },
   computed: {
    marker () {
      return this.$store.getters.marker
    }
   }
      
    
}
</script>
