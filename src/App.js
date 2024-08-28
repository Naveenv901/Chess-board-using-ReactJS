import React from "react";
import "./App.css"
import { FaChessKing } from "react-icons/fa";
import { FaChessPawn } from "react-icons/fa";
import { FaChessRook } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaRegChessRook } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessBishop } from "react-icons/fa6";
const arr=[<FaChessRook/>,<FaChessKnight />,<FaChessBishop />,<FaChessQueen />,<FaChessKing />,<FaChessBishop />,<FaChessRook/>]
function Event(){
  
}
function App(){
  return(
    <div className="Main">
      <div>
        <table>
          <tr className="row1">
            <td><FaChessRook/></td>
            <td><FaChessKnight /></td>
            <td><FaChessBishop /></td>
            <td><FaChessQueen /></td>
            <td><FaChessKing /></td>
            <td><FaChessBishop /></td>
            <td><FaChessKnight /></td>
            <td><FaChessRook/></td>
          </tr>
          <tr className="row2">
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn/></td>
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn/></td>
          </tr>
          <tr className="row1">
            <td onClick={()=>Event()}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="row2">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="row1">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="row2">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="row1">
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
          </tr>
          <tr className="row2">
            <td><FaRegChessRook /></td>
            <td>< FaRegChessKnight /></td>
            <td><FaRegChessBishop /></td>
            <td><FaRegChessKing /></td>
            <td><FaRegChessQueen /></td>
            <td><FaRegChessBishop /></td>
            <td><FaRegChessKnight /></td>
            <td><FaRegChessRook /></td>
          </tr>

        </table>
      </div>
    </div>
  )
}
export default App;
