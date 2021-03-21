import { Image } from "react-bootstrap";
import mageM from '../assets/MageM.png';
import rangerM from '../assets/RangerM.png';
import knightM from '../assets/KnightM.png';
import druidM from '../assets/DruidM.png';
import warriorM from '../assets/WarriorM.png';
import thiefM from '../assets/ThiefM.png';
import monkM from '../assets/MonkM.png';
import mageF from '../assets/MageF.png';
import rangerF from '../assets/RangerF.png';
import knightF from '../assets/KnightF.png';
import druidF from '../assets/DruidF.png';
import warriorF from '../assets/WarriorF.png';
import thiefF from '../assets/ThiefF.png';
import monkF from '../assets/MonkF.png';

const Avatar = ({ currentAvatar, gender }) => {

    const maleAvatars = {
        knight: knightM,
    }

    const femaleAvatars = {
        knight: knightF,
    }

    const imageStyle = {
        width: 30 + "rem",
    }


    return (
        <>
            <div className="container">
                <Image src={gender === "male" ? maleAvatars[currentAvatar] : femaleAvatars[currentAvatar]} style={imageStyle}></Image>
            </div>
        </>
    )

}

export default Avatar;