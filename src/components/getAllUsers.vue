<template>
    <div>
        <ul class="li">
            <li v-for="name in dataName" :key="name"> {{name}}
            </li>
            <li> 
            </li>
            <li>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataName: [],
            dataEmail: [],
            dataLocation: []
        }
    },
    method: {
         getData() {
            fetch("http://restapi.adequateshop.com/api/users?page=1", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    }
                })
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result);
                        const data = result;
                        let obj1 = "data";

                        for (let i in data) {
                            if (i === obj1) {
                                let a = data[i];
                                console.log(a);
                                for (let j in a) {
                                    let b = a[j];
                                    console.log(b)
                                    for (let k in b) {
                                        if (k === "name") {
                                            let name = b[k];
                                            console.log(name)
                                            this.dataName.push(name)
                                        } if (k === "email") {
                                            let email = b[k];
                                            console.log(email)
                                            this.dataName.push(email)
                                        } if (k === "location") {
                                            let location = b[k];
                                            console.log(location)
                                            this.dataName.push(location)
                                        }
                                    }
                                }
                            }
                        }
                    })
                .catch((error) => console.log("error", error))
   }
        }
    }

</script>

<style scoped>
.li {
    background-color: aliceblue;
    display: flex;
    flex-flow: column;
    color:rgb(223, 64, 64)
}

</style>