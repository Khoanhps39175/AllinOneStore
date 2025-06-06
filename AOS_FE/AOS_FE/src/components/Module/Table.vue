<template>
    <div class="container-fluid">
        <h1 class=" fw-bold mb-4">{{ props.TableName }}</h1>

        <div v-if="loading" class="text-primary">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-if="error" class="text-danger">{{ error }}</div>

        <div><a :href="`/Admin/${props.TableName}/create`" class="btn btn-primary">Thêm mới</a></div>
        <table v-if="data.length" class="table table-bordered table-hover container-fluid">
            <thead class="table-light">
                <tr>
                    <th v-for="key in columns" :key="key">
                        {{ key }}
                    </th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td v-for="key in columns" :key="key">
                        {{ item[key] }}
                    </td>
                    <td class="row">

                        <button type="button" @click="goToView(item.id)"
                            class="btn btn-primary me-2 row-6">View</button>
                        <button type="button" @click="goToEdit(item.id)"
                            class="btn btn-primary me-2 row-6">Edit</button>
                        <button type="button" @click="" class="btn btn-danger row-6">Delete</button>

                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="!data.length && !loading && !error" class="text-muted">
        </div>
        <div class="pageselect">
            <select id="pageSize" class="form-select" v-model="currentSize">
                <option :value="5">5</option>
                <option :value="10">10</option>
                <option :value="15">15</option>
            </select>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" :class="{ disabled: currentPage === 0 }">
                        <a class="page-link" href="#" aria-label="Previous"
                            @click.prevent="currentPage > 0 && updateCurrentPage(currentPage - 1)">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    <li class="page-item" :class="{ disabled: data.length < currentSize }">
                        <a class="page-link" href="#" aria-label="Next"
                            @click.prevent="data.length >= currentSize && updateCurrentPage(currentPage + 1)">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
</template>
<style>
.pageselect>select#pageSize {
    width: 50px;
}
</style>
<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import 'bootstrap/dist/css/bootstrap.min.css'
const currentPage = ref(0);
const currentSize = ref(5);
function updatePageSize(size) {
    currentSize.value = size
}
function updateCurrentPage(pageIndex) {
    currentPage.value = pageIndex
}

const props = defineProps({
    TableName: {
        type: String,
        required: true
    }
})
function goToView(id) {
    router.push(`/Admin/${props.TableName}/view/${id}`)
}
function goToEdit(id) {
    router.push(`/Admin/${props.TableName}/update/${id}`)
}
const data = ref([])
const columns = ref([])
const loading = ref(false)
const error = ref(null)

const fetchData = async () => {
    if (!props.TableName) return
    loading.value = true
    error.value = null
    try {
        const response = await fetch("http://localhost:8080/api/admin/" + props.TableName + "?page=" + currentPage.value + "&size=" + currentSize.value)
        if (!response.ok) throw new Error('Failed to fetch data')
        const json = await response.json()
        data.value = Array.isArray(json) ? json : [json]
        columns.value = data.value.length ? Object.keys(data.value[0]) : []
    } catch (err) {
        error.value = err.message
        data.value = []
        columns.value = []
    } finally {
        loading.value = false
    }
}
const totalPages = computed(() => {
    return Math.ceil(data.value.length / currentSize.value)
})

onMounted(fetchData)
watch(() => props.TableName, fetchData)
watch(() => currentSize.value, fetchData)
watch(() => currentPage.value, fetchData)
</script>

<style scoped>
table {
    border-collapse: collapse;
}
</style>
