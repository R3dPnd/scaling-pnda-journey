import { Dispatch, SetStateAction } from 'react';
import './CompanyCoinContainer.scss'
import { CompanyCoin, getCompanyCoins } from './CompanyCoins';

import Coin from '../../../layout/coin/Coin';
import { WorkHistory } from '../../../interface/WorkHistory';
import { getWorkHistories } from '../WorkHistories';

interface Props {
    setWorkHistory: (workHistory: WorkHistory) => void;
}

export default function CompanyCoinContainer(props: Props) {

    const CompanyCoins: CompanyCoin[] = getCompanyCoins();
    const WorkHistories: WorkHistory[] = getWorkHistories();

    function setCompany(companyName: string): void {
        console.log(companyName);
        WorkHistories.forEach((workHistory) => {
            if(workHistory.company == companyName){
                props.setWorkHistory(workHistory);
            }
        })
    }

    return (
        <>
            <div className="row coin-container u-center-text">
                {
                    CompanyCoins?.map((coin) => {
                        return (
                            <div className='col-1-of-4 u-center-text coin-container'>
                                <Coin onClick={() => setCompany(coin.name)}>
                                    <img
                                        src={coin.srcName}
                                        alt={coin.alt}
                                        className={"container__photo"}
                                    />
                                </Coin>
                                <h3>{coin.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
            <h3 className='credits u-center-text'>0 credits</h3>
        </>
    )
}