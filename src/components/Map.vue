<template>
  <div>
    <!--Grid row-->
    <div class="row">

      <!--Grid column-->
      <div class="col-md-6 mb-4">

        <!--Card-->
        <div class="card card-cascade narrower">

          <!--Card image-->
          <div class="view view-cascade gradient-card-header blue-gradient">
            <h5 class="mb-0">Regular map</h5>
          </div>
          <!--/Card image-->

          <!--Card content-->
          <div class="card-body card-body-cascade text-center">

            <!--Google map-->
            <div id="map-container-google-8" class="z-depth-1-half map-container-5" style="height: 300px">
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1DQ1fZit-lxoXEQrhlvkOApGVm-0&hl=en&ie=UTF8&msa=0&source=embed&ll=41.30863200000001%2C-72.92904900000002&spn=0.011283%2C0.018239&z=15&output=embed"
                frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>

          </div>
          <!--/.Card content-->

        </div>
        <!--/.Card-->

      </div>
      <!--Grid column-->

    </div>
    <!--Grid row-->
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.map-container-5{
overflow:hidden;
padding-bottom:56.25%;
position:relative;
height:0;
}
.map-container-5 iframe{
left:0;
top:0;
height:100%;
width:100%;
position:absolute;
}

</style>
