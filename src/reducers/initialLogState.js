const initialLogState = {
    // logList:

        WaldorfSelected: true,
        OmahaSelected: true,
        maleSelected: true,
        femaleSelected: true,
        logTypeID: 0, 
        logType: 'ALL',
        toLoadLogsFromAPI: true,
        logsFromAPI: [],
        logID: 0, //null,
        logData: {},
        requestLogsURL: '',
        requestLogURL: '',
        lastUpdated: '',
        newLogModalIsOpen: false,

    // logEdit:
        myEdit: 'default'

};

export default initialLogState;
