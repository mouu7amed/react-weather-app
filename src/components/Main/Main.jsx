import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import useForecast from '../../tools/useForecast.js'
import { Search } from '../Search/Search'
import { Loading } from '../Loading/Loading'
import { Footer } from '../Footer/Footer'
import { Forecast } from '../Forecast/Forecast'

export const Main = () => {
    const { isLoading, error, forecast, submitRequest } = useForecast()

    return (
        <Fragment>
            <div className="title">
                Weather <span>Forecast</span>
            </div>
            {!forecast && (
                <div className="container">
                    {/* Form */}
                    {!isLoading && (
                        <Search
                            error={error}
                            submitRequest={submitRequest}
                        />
                    )}
                    {/* Loader */}
                    {isLoading && <Loading />}
                </div>
            )}
            {forecast && <Forecast forecast={forecast} />}
            {forecast && <button className="back" onClick={() => {
                window.location.reload()
            }}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>}
            <Footer />
        </Fragment>
    );
}
