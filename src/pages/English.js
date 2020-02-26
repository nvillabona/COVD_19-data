import React from 'react';

class English extends React.Component {

    state ={
        confirmed: 0,
        deaths: 0
    }
    componentDidMount(){
        this.getCases()
        this.getDeaths()
    }
    getCases = async() =>{

        const response = await fetch('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv')
        const data = await response.text()
        const table = data.split('\n').slice(1)
                    
        var filas, suma = 0,i = 2, size;
        table.forEach(row =>{
            size = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).length
            filas = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).splice(size-1, size)
            //console.log(filas)
            //console.log(`${i} ${typeof filas}-> ${filas}`)
            for ( let i =  0 ; i < filas.length; i ++){
                suma +=parseInt(filas[i])
            }
            console.log(suma)
        })

        this.setState({
            confirmed: suma
        })
        
        
    }

    getDeaths = async() =>{

        const response = await fetch('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv')
        const data = await response.text()
        const table = data.split('\n').slice(1)
                    
        var filas, suma = 0,i = 2, size;
        table.forEach(row =>{
            size = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).length
            filas = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).splice(size-1, size)
            //console.log(filas)
            //console.log(`${i} ${typeof filas}-> ${filas}`)
            for ( let i =  0 ; i < filas.length; i ++){
                suma +=parseInt(filas[i])
            }
            console.log(suma)
        })

        this.setState({
            deaths: suma
        })
        
        
    }
    render(){
    return(
        <React.Fragment>
            <h1>Confirmed cases</h1>
            
            <h3>{this.state.confirmed}</h3>
            <br />
            <h1>Deaths</h1>
            <h3>{this.state.deaths}</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h5>Data taken from  Johns Hopkins University for educational purposes</h5>

        </React.Fragment>

    )
    }
}

export default English;