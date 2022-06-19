<template>
    <div>
        <h1>Hello world</h1>
        <ul v-for="user in users" :key="user.id">
            <li>{{user.name}}</li>
            <li>{{user.email}}</li>
            <li>{{user.location}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    async created() {
        await fetch("http://restapi.adequateshop.com/api/users?page=1", {
             headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then((response) => response.json())
            .then((result) => {
                // for(let i in result.data)
                // this.dataInfo.push(result.data[i])
                // we just assign result to data info
                this.users = result.data;
            })
            .catch((error) => console.log("error", error))
    }
} 

</script>

<style scoped>
li {
    padding-top: 5px;
    list-style: none;
}
</style>