<template>
    <div>
        <ul>
            <li 
            v-for="data in dataInfo" :key="data"> {{data}}
            </li>
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
                for (let i in result.data) {
                        this.dataInfo.push(result.data[i].name)
                        this.dataInfo.push(result.data[i].email)
                        this.dataInfo.push(result.data[i].location)
                }
            })
            .catch((error) => console.log("error", error))
    }
} 

</script>

<style scoped>
li {
    padding-top: 10px;
    list-style: none;
}
</style>