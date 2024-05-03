export default{
    loaded: function(app){
        this.formInfo = [
            {
                formCard: 'w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700',
                formheader: 'text-xl font-medium text-gray-900 dark:text-white boldened underline', 
                labelclass: 'block my-2 text-sm font-normal text-black dark:text-gray-400 underline boldened uppercase',
                formsuccess: false,
                buttoninfo: 'Submit',
                buttoninfoIcon: 'fas fa-paper-plane fa-1x',
                submitbtnClass: 'w-full uppercase text-gray-800 hover:text-gray-700 bg-cyan-300 hover:bg-cyan-400 focus:ring-2 focus:outline-none focus:ring-cyan-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 uppercase rounded border-2 hover:border-2 border-cyan-600 hover:border-cyan-700 shadow-md',
                iconreloadclass: 'text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                inputclass: 'bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                infoText: "mt-2 text-sm text-gray-500 dark:text-gray-400",
                submitSmall: 'text-gray-800 hover:text-gray-700 bg-cyan-300 hover:bg-cyan-400 focus:ring-2 focus:outline-none focus:ring-cyan-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 uppercase rounded border-2 hover:border-2 border-cyan-600 hover:border-cyan-700 shadow-md',
            },
        ]
        return this.formInfo[0];
    },

    loading: function(app){
        this.formInfo = [
            {
                formCard: 'w-full p-4 bg-orange-50 border-2 border-orange-400 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700',
                formheader: 'text-xl font-medium text-orange-700 dark:text-white boldened underline',
                labelclass: 'block my-2 text-sm font-normal text-orange-700 dark:text-orange-400 text-orange underline boldened uppercase',
                buttoninfo: 'Loading..',
                buttoninfoIcon: 'fas fa-spinner fa-spin fa-1x',
                submitbtnClass: 'w-full uppercase text-orange-800 dark:text-orange-900 hover:text-orange-700 bg-orange-300 hover:bg-orange-400 focus:ring-2 focus:outline-none focus:ring-orange-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 rounded border-2 hover:border-2 border-orange-600 hover:border-orange-700 shadow-md',
                iconreloadclass: 'fas fa-spinner fa-spin',
                inputclass: 'border text-orange-700 text-sm rounded-lg focus:ring-orange-500 border-orange-200 focus:border-orange-500 block w-full p-2.5 bg-orange-50 dark:bg-orange-100 dark:border-orange-600 placeholder-orange-700 dark:placeholder-orange-400 dark:text-orange-700 dark:focus:ring-orange-500 dark:focus:border-orange-500',
                submitSmall: 'text-orange-800 hover:text-orange-700 bg-orange-300 hover:bg-orange-400 focus:ring-2 focus:outline-none focus:ring-orange-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 rounded border-2 hover:border-2 border-orange-600 hover:border-orange-700 shadow-md',
            },
        ]
        return this.formInfo[0];
    },

    failed: function(app){
        this.formInfo = [
            {
                formCard: 'w-full p-4 bg-red-50 border-2 border-red-400 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-red-700',
                formheader: 'text-xl font-medium text-red-700 dark:text-white boldened underline', 
                labelclass: 'block my-2 text-sm font-normal text-red-700 dark:text-red-400 underline boldened uppercase',
                labelErrorclass: 'block my-2 text-sm font-normal text-red-700 dark:text-red-400 text-danger underline boldened uppercase',
                buttoninfo: 'Resubmit',
                buttoninfoIcon: 'fas fa-times fa-1x',
                submitbtnClass: 'w-full uppercase text-red-800 hover:text-red-700 bg-red-300 hover:bg-red-400 focus:ring-2 focus:outline-none focus:ring-red-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 rounded border-2 hover:border-2 border-red-600 hover:border-red-700 shadow-md',
                iconreloadclass: 'fas fa-times px-2',
                iconerrorSuccess: 'fas fa-check px-2',
                inputclass: 'border text-red-700 text-sm rounded-lg focus:ring-red-500 border-red-200 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-600 placeholder-red-400 dark:placeholder-red-400 dark:text-red-700 dark:focus:ring-red-500 dark:focus:border-red-500 option-font',
                infoText: "mt-2 font-normal text-sm text-red-700",
                infoErrorSuccess: "mt-2 font-normal text-sm text-green-700",
                submitSmall: 'text-red-800 hover:text-red-700 bg-red-300 hover:bg-red-400 focus:ring-2 focus:outline-none focus:ring-red-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 rounded border-2 hover:border-2 border-red-600 hover:border-red-700 shadow-md',
            },
        ]
        return this.formInfo[0];
    },

    success: function(app){
        this.formInfo = [
            {
                formCard: 'w-full p-4 bg-green-50 border-2 border-green-400 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-green-700',
                formheader: 'text-xl font-medium text-green-700 dark:text-white boldened underline',
                labelclass: 'block my-2 text-sm font-normal text-green-700 dark:text-green-400 text-success underline boldened uppercase',
                formsuccess: true,
                buttoninfo: 'Success',
                buttoninfoIcon: 'fas fa-check fa-1x',
                submitbtnClass: 'w-full uppercase text-green-800 hover:text-green-700 bg-green-300 hover:bg-green-400 focus:ring-2 focus:outline-none focus:ring-green-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded border-2 hover:border-2 border-green-600 hover:border-green-700 shadow-md',
                iconreloadclass: 'fas fa-check',
                inputclass: 'border text-green-700 text-sm rounded-lg focus:ring-green-500 border-green-200 focus:border-green-500 block w-full p-2.5 bg-green-50 dark:bg-green-100 dark:border-green-600 placeholder-green-400 dark:placeholder-green-400 dark:text-green-700 dark:focus:ring-green-500 dark:focus:border-green-500 form-success',
                submitSmall: 'text-green-800 hover:text-green-700 bg-green-300 hover:bg-green-400 focus:ring-2 focus:outline-none focus:ring-green-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded border-2 hover:border-2 border-green-600 hover:border-green-700 shadow-md',
            },
        ]
        return this.formInfo[0];
    }
}