import { Dispatch, SetStateAction } from 'react';
import './CompanyCoinContainer.scss'
import { CompanyCoin, getCompanyCoins } from './CompanyCoins';

import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import Card from '../../../layout/card/Card';
import Coin from '../../../layout/coin/Coin';
import ArcadeScreen from '../../../layout/arcade-screen/ArcadeScreen';

interface Props {
    setCompany: Dispatch<SetStateAction<string | undefined>>;
}

export default function CompanyCoinContainer(props: Props) {

    const CompanyCoins: CompanyCoin[] = getCompanyCoins();

    return (
        <>
            <div className="row coin-container u-center-text">
                {
                    CompanyCoins?.map((coin) => {
                        return (
                            <div className='col-1-of-4 u-center-text coin-container'>
                                <Coin>
                                    <img
                                        src={coin.srcName}
                                        alt={coin.alt}
                                        className={"container__photo"}
                                        onClick={() => props.setCompany("revature")}
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