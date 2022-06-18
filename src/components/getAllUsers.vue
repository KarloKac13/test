<template>
    <div>
        <ul v-for="data in dataInfo" :key="data">
            <li>{{data.name}}</li>
            <li>{{data.email}}</li>
            <li>{{data.location}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataInfo: []
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
                for(let i in result.data)
                this.dataInfo.push(result.data[i])
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