<template>
  <div>
    <v-row dense>
      <v-col>
        <h1>news feed</h1>

        <v-simple-table dense height="500px">
          <template>
            <thead>
              <tr>
                <th class="text-left">TITLE</th>
                <th class="text-left">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in Blog" :key="item._id">
                <td class="pa-2">{{ item.title }}</td>
                <td class="pa-2">{{ item.des.substring(0, 200) }}</td>

                <td class="py-2">
                  <p>{{ GettimePost(item.date) }}</p>
                  <nuxt-link :to="'/newsfeed/' + item._id" style="text-decoration: none">
                    <v-btn depressed color="primary">Read More</v-btn></nuxt-link
                  >
                  <!-- <v-btn depressed color="error" @click="deletePost(item._id)">delete</v-btn> -->
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col>
        <h1>Latest feed</h1>
        <v-simple-table>
          <template>
            <thead>
              <tr>
                <th class="text-left">TITLE</th>
                <th class="text-left">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in LatestPost" :key="item._id">
                <td>{{ item.title }}</td>
                <td>{{ item.des.substring(0, 100) }}</td>

                <td class="pa-3">
                  <p>{{ GetcustomizeDate(item.date) }}</p>
                  <nuxt-link :to="'/newsfeed/' + item._id" style="text-decoration: none">
                    <v-btn depressed color="primary">Read More</v-btn></nuxt-link
                  >
                  <!-- <v-btn depressed color="error" @click="deletePost(item._id)">delete</v-btn> -->
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment'
const url = 'http://localhost:8000/getdata'
const latesturl = 'http://localhost:8000/latestpost'
export default {
  data() {
    return {
      Blog: [],
      LatestPost: [],
    }
  },

  async mounted() {
    // get all post
    await this.$axios
      .get(url)
      .then((res) => {
        this.Blog = res.data
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    // Get the latest five post
    await this.$axios
      .get(latesturl)
      .then((res) => {
        this.LatestPost = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },

  methods: {
    GetcustomizeDate: (date) => moment(date).format('MMM Do YY'),
    GettimePost: (date) => moment(date).startOf('day').fromNow(),
  },
}
</script>

<style></style>
