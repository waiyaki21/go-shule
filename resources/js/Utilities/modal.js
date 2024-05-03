export default{
    loaded: function(app){
        this.modalInfo = [
            {
                infoShow    : true,
                loadingShow : false,
                successShow : false,
                failureShow : false,
                deleteShow  : false,
                modalMain   : 'border-blue-600',
                backdrop    : 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-[1]',
                closeClass  : 'w-6 h-6 text-blue-600 dark:text-blue-600',
                modalClass  : 'relative bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-cyan-600',
                textClassess: 'mb-2 text-lg font-normal bold-caps text-gray-700 dark:text-gray-400 flex justify-center',
                iconClassess: 'm-auto text-gray-700 w-14 h-14 dark:text-gray-700',
                btnClassess: 'absolute top-3 right-2.5 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white dark:text-blue-600 border border-blue-600',
                submitClass : 'text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 justify-center mr-2 uppercase',
                submitInfo  : 'Okay, Submit!',
                cancelBtn   : 'text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-700 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-800 dark:text-gray-300 dark:border-blue-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 uppercase boldened',
            },
        ]
        return this.modalInfo[0];
    },

    loading: function(app){
        this.modalInfo = [
            {
                infoShow    : false,
                loadingShow : true,
                successShow : false,
                failureShow : false,
                deleteShow  : false,
                modalMain   : 'border-orange-600',
                backdrop    : 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-[1]',
                closeClass  : 'w-6 h-6 text-orange-600 dark:text-orange-600',
                modalClass  : 'relative bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-orange-600',
                textClassess: 'mb-2 text-lg font-normal bold-caps text-orange-700 dark:text-orange-700 flex justify-center',
                iconClassess: 'm-auto text-orange-700 w-14 h-14 dark:text-orange-700',
                btnClassess: 'absolute top-3 right-2.5 text-orange-700 bg-transparent hover:text-orange-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:text-orange-600 dark:hover:text-white border border-orange-600',
                submitClass : 'text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 justify-center mr-2 uppercase',
                submitInfo  : 'Loading, Please Wait!',
                cancelBtn   : 'text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-700 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-800 dark:text-gray-300 dark:border-blue-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 uppercase boldened',
            },
        ]
        return this.modalInfo[0];
    },

    failed: function(app){
        this.modalInfo = [
            {
                infoShow    : false,
                loadingShow : false,
                successShow : false,
                failureShow : true,
                deleteShow  : false,
                modalMain   : 'border-red-600',
                backdrop    : 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-[1]',
                closeClass  : 'w-6 h-6 text-red-600 dark:text-red-600',
                modalClass  : 'relative bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-red-600',
                textClassess: 'mb-2 text-lg font-normal bold-caps text-red-700 dark:text-red-400 flex justify-center',
                iconClassess: 'm-auto text-red-700 w-14 h-14 dark:text-red-700',
                btnClassess: 'absolute top-3 right-2.5 text-red-700 bg-transparent hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:text-red-600 dark:hover:text-white border border-red-600',
                submitClass : 'text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 justify-center mr-2 uppercase',
                submitInfo : 'Try Again!',
                cancelBtn   : 'text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-700 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-800 dark:text-gray-300 dark:border-blue-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 uppercase boldened',
            },
        ]
        return this.modalInfo[0];
    },

    success: function(app){
        this.modalInfo = [
            {
                infoShow    : false,
                loadingShow : false,
                successShow : true,
                failureShow : false,
                deleteShow  : false,
                modalMain   : 'border-green-600',
                backdrop    : 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-[1]',
                closeClass  : 'w-6 h-6 text-green-600 dark:text-green-600',
                modalClass  : 'relative bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-green-600',
                textClassess: 'mb-2 text-lg font-normal bold-caps text-green-700 dark:text-green-400 flex justify-center',
                iconClassess: 'mx-auto mb-4 text-green-700 w-14 h-14 dark:text-green-700',
                btnClassess: 'absolute top-3 right-2.5 text-green-400 bg-transparent hover:text-green-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:text-green-600 dark:hover:text-white border border-green-600',
                submitInfo  : 'SUCCESS!',
                submitClass : 'text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 justify-center mr-2 uppercase',
                cancelBtn   : 'text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-700 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-800 dark:text-gray-300 dark:border-blue-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 uppercase boldened',
            },
        ]
        return this.modalInfo[0];
    },

    delete: function(app){
        this.modalInfo = [
            {
                infoShow    : false,
                loadingShow : false,
                successShow : false,
                failureShow : false,
                deleteShow  : true,
                modalMain   : 'border-red-600',
                backdrop    : 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-[1]',
                closeClass  : 'w-6 h-6 text-red-600 dark:text-red-600',
                modalClass  : 'relative bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-red-600',
                textClassess: 'mb-5 text-lg font-normal bold-caps text-red-700 dark:text-red-400',
                iconClassess: 'mx-auto mb-4 text-red-700 w-14 h-14 dark:text-red-700',
                btnClassess: 'absolute top-3 right-2.5 text-red-700 bg-transparent hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:text-red-600 dark:hover:text-white border border-red-600',
                submitClass : 'text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 uppercase',
                submitInfo  : 'Delete!',
                cancelBtn   : 'text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-700 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-800 dark:text-gray-300 dark:border-blue-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 uppercase boldened',
            },
        ]
        return this.modalInfo[0];
    }
}