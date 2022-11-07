class DB {
    private dbName: string; //数据库名称
    private db: any; // 数据库对象
    constructor(dbName: string) {
        this.dbName = dbName
    }
    // 打开数据库
    public openStore(storeName: string, keyPath: string, indexs?: string[]) {
        const require = window.indexedDB.open(this.dbName, 2)
        require.onsuccess = (event: any) => {
            this.db = event.target.result
            console.log(event, 'event success')
        }
        require.onerror = (event: any) => {
            console.log(event, 'event error')
        }
        require.onupgradeneeded = (event: any) => {
            console.log(event, 'event onupgradeneeded')
            // 创建数据库
            const { result }: any = event.target
            const store = result.createObjectStore(storeName, {autoIncrement: true, keyPath})
            store.transaction.oncomplate = (event: any) => {
                console.log('创建数据库成功', event)
            }
            // 创建索引
            indexs && indexs.forEach((item: string) => {
                store.createIndex(item, item, {unique: false})
            })
        }
    }

    // 新增/修改 数据库数据 所以使用put
    updateItem(storeName: string, data: any) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.put({...data, updateTime: Date.now()})
        request.onsuccess = (event: any) => {
            console.log('数据更新成功', event)
        }
        request.onerror = (event: any) => {
            console.log('数据更新失败', event)
        }
    }
    // 删除数据库数据
    deleteItem(storeName: string, key: string | number) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.delete(key)
        request.onsuccess = (event: any) => {
            console.log('数据删除成功', event)
        }
        request.onerror = (event: any) => {
            console.log('数据删除失败', event)
        }
    }
    // 获取整个数据库数据
    getList(storeName: string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.getAll()
        request.onsuccess = (event: any) => {
            console.log('数据获取成功', event)
        }
        request.onerror = (event: any) => {
            console.log('数据获取失败', event)
        }
    }
    // 获取单个数据库数据
    getItem(storeName: string, key: string | number) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.get(key)
        request.onsuccess = (event: any) => {
            console.log('数据获取成功', event)
        }
        request.onerror = (event: any) => {
            console.log('数据获取失败', event)
        }
    }
}

export default DB

