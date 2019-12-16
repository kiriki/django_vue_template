<template>
  <div class="hello">
    <h2>GET data from Django API (/api/test)</h2>
    <div class="wrapper">
      <p>/api/test</p>
      <span>Django version</span>: <span>{{ testData.django }}</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    props: {
      msg: { type: String, required: true }
    },
    data () {
      return {
        testData: { foo: '' }
      }
    },
    mounted () {
      console.log('mounted')
      axios.get('/api/test')
        .then(res => {
          this.testData = res.data
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
</style>
