import Image from "next/image";
import data from '@/app/_components/dataGame';
import styles from "./index.module.css"

export default function ResultView({results,onReset}) {

    let mickey = 0; 
    let minnie = 0;
    let pete = 0;
    let parrot = 0;
    let goat = 0;

    results.map((result) => {
        if(result.selectKey == 0) {
            mickey += parseInt(result.selectValue);
        } else if(result.selectKey == 1) {
            minnie += parseInt(result.selectValue);
        } else if(result.selectKey == 2) {
            pete += parseInt(result.selectValue);
        } else if(result.selectKey == 3) {
            parrot += parseInt(result.selectValue);
        } else if(result.selectKey == 4) {
            goat += parseInt(result.selectValue);
        }
    })

    const resultArray = [mickey, minnie, pete, parrot, goat];
    const maxIndex = resultArray.indexOf(Math.max(...resultArray));
    const characterSet = data.result.filter(that => that.id === maxIndex);
    const {img, name, content} =  {...characterSet[0]};

    const handleClick = () => onReset();
    
    return (
        <div className={styles.results}>
            <div>
                <Image
                    src={`/game/${img}.jpg`}
                    alt=""
                    width={700}
                    height={700}
                    sizes="(max-width: 630px) 70vw, 30vw"
                    loading="eager"
                    style={{width: '100%',height: 'auto'}}
                />
            </div>
            <div className={styles.contents}>
                <p>あなたは<span>{name}</span>です。</p>
                <p>{content}</p>
                <button className={styles.button} onClick={handleClick}><span>最初の画面に戻る</span></button>
            </div>
        </div>
    )
}