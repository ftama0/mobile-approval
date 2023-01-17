<template>
  <div class="home">
    <div class="bg-green-900" style="height:100vh;width:100vw;">
      <div style="height:100vh;" class="d-flex justify-content-center align-items-center shadow-lg rounded-lg">
        <div style="width:100%">
          <img src="@/assets/logo.png" style="width:70px;height:70px;display:block;margin:auto;" alt="">
          <p class="font-semibold text-white text-center text-2xl">APPROVAL <br> SYSTEM </p>
          <div class="row justify-content-center">
            <div class="col-6">
              <hr>
              <div class="sm-form text-center">
                <form action="" @submit.prevent="login">
                  <input type="text" id="username" name="username" class="form-control p-2 my-1 rounded-lg shadow" placeholder="username" v-model="vdata['username']" >
                  <input type="password" id="password" name="password" class="form-control my-1 p-2 rounded-lg shadow" placeholder="password" v-model="vdata['password']" >
                  <button type="submit"  class="btn btn-sm btn-style9  text-center mt-2">Login</button>
                  <br>
                  <br>
                  <p class="font-semibold text-center text-white m-0">Copyright 2023</p>
                  <p class="font-semibold text-center text-white m-0">PT Hasnur Informasi Teknologi</p>
                  <p class="font-semibold text-center text-white m-0 font-italice">All Right Reserved</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      vdata:{}
    }
  },
  methods:{
    login(){
      this.$router.push('/about')
      // axios.post('/login').then(res=>{

      //   console.log('hasil')
      // })
      // console.log('hello')
    },
    async login2(){
      let data=await axios.post('/login').then(res=>{

      })
      console.log('hello')
    }
  }
}
</script>
