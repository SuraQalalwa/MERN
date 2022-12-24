import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerForm from '../components/PlayerForm';
import Game1 from '../components/Game1'
export default () =>{

    return (
        <div>
            <PlayerForm/>
        </div>
    )
}
