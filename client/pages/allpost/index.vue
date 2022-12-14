<template>
  <div>
    <div class="pb-5">
      <v-row dense class="px-3 pt-4">
        <v-col class="col-md-10"> <h2>All post</h2></v-col>
        <v-col class="col-md-2">
          <nuxt-link :to="{ name: 'index' }" style="text-decoration: none">
            <v-btn color="success">Create Post</v-btn>
          </nuxt-link>
        </v-col>
      </v-row>
    </div>
    <v-simple-table dense>
      <template>
        <thead>
          <tr>
            <th class="text-left">TITLE</th>
            <th class="text-left">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in post" :key="item._id">
            <td>{{ item.title }}</td>
            <td>{{ item.des.substring(0, 100) }}</td>
            <td class="py-2">
              <nuxt-link
                :to="'/allpost/' + item._id"
                style="text-decoration: none"
              >
                <v-btn depressed color="primary" @click="item._id"
                  >Edit</v-btn
                ></nuxt-link
              >
              <v-btn depressed color="error" @click="deletePost(item._id)"
                >delete</v-btn
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: [],
    };
  },
  mounted() {
    this.getallData();
  },
  methods: {
    async getallData() {
      await this.$axios
        .get("http://localhost:8100/getdata")
        .then((res) => {
          this.post = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async deletePost(id) {
      await this.$axios
        .delete("http://localhost:8100/delete/" + id)
        .then((res) => {
          this.getallData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
