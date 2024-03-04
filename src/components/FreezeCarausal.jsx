import Image from "./Image";
import MyCarousel from "./MyCarousel";

export function FreezeCarausal(props) {
    const style = {
        display: 'flex',
        flexDirection: 'row'
    }
    return (
        <div style={{whiteSpace: 'nowrap'}}>
            {/* <div>
                <img src={props.images[0].src} alt="" />
            </div> */}
            <div style={{ display:'inline-block', width:'40%', position:'relative', verticalAlign: 'top', margin:  '5px'}}>

              {/* <img src={props.images[0].src} alt="" style={{ width:'100%', height: 'auto'}}/> */}
              <MyCarousel images={props.images.slice(0,1)} indexHandler={props.indexHandler} slidesToShow={1} frozen={true}/>
            </div>
            <div style={{ display:'inline-block', width:'40%', position:'relative', height: '40%', verticalAlign: 'top', margin:  '5px'}}>

              {/* <img src={props.images[0].src} alt="" style={{ width:'100%', height: 'auto'}}/> */}
              <MyCarousel images={props.images.slice(1)} indexHandler={props.indexHandler} slidesToShow={1} frozen={false}/>
            </div>
            {/* <div style={{ display:'inline-block', width:'60%', height: '40%'}}>
            <MyCarousel images={props.images.slice(1)} indexHandler={props.indexHandler} slidesToShow={1} />
            </div> */}
            
        </div>
    )
}