import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-col flex-wrap sm:flex-row m-3 justify-evenly`}>
      {stats.map((stat) => (

        <div key={stat.id} className={`flex-1 flex justify-center items-start flex-row m-2`}>
          <h4 className='font-poppins font-semibold xm:text-[23px] text-[30px] text-white xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
          <p className='font-popins font-normal xm:text-[10px] text-[15px] text-gradient xs:leading-[26px] leading-[21px] uppercase m-3'>{stat.title}</p>
        </div>

      ))}
    </section>
  )
}

export default Stats