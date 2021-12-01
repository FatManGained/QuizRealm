import React from "react";
import { useState, useEffect } from "react";
import "./map.css"
import regionMap from "./regionMap.png"
import mapRegion01 from "./mapregions/region01.svg"
import mapRegion02 from "./mapregions/region02.svg"
import mapRegion03 from "./mapregions/region03.svg"
import mapRegion04 from "./mapregions/region04.svg"
import mapRegion05 from "./mapregions/region05.svg"
import mapRegion06 from "./mapregions/region06.svg"
import mapRegion07 from "./mapregions/region07.svg"
import mapRegion08 from "./mapregions/region08.svg"
import mapRegion09 from "./mapregions/region09.svg"
import mapRegion10 from "./mapregions/region10.svg"
import mapRegion11 from "./mapregions/region11.svg"
import mapRegion12 from "./mapregions/region12.svg"
import mapRegion13 from "./mapregions/region13.svg"
import mapRegion14 from "./mapregions/region14.svg"
import mapRegion15 from "./mapregions/region15.svg"
import mapRegion16 from "./mapregions/region16.svg"
import mapRegion17 from "./mapregions/region17.svg"
import mapRegion18 from "./mapregions/region18.svg"
import mapRegion19 from "./mapregions/region19.svg"
import mapRegion20 from "./mapregions/region20.svg"
import mapRegion21 from "./mapregions/region21.svg"
import mapRegion22 from "./mapregions/region22.svg"
import mapRegion23 from "./mapregions/region23.svg"
import mapRegion24 from "./mapregions/region24.svg"
import mapRegion25 from "./mapregions/region25.svg"
import mapRegion26 from "./mapregions/region26.svg"
import mapRegion27 from "./mapregions/region27.svg"
import mapRegion28 from "./mapregions/region28.svg"
import mapRegion29 from "./mapregions/region29.svg"
import mapRegion30 from "./mapregions/region30.svg"
import mapRegion31 from "./mapregions/region31.svg"
import mapRegion32 from "./mapregions/region32.svg"
import mapRegion33 from "./mapregions/region33.svg"
import mapRegion34 from "./mapregions/region34.svg"
import mapRegion35 from "./mapregions/region35.svg"
import mapRegion36 from "./mapregions/region36.svg"
import mapRegion37 from "./mapregions/region37.svg"
import mapRegion38 from "./mapregions/region38.svg"
import mapRegion39 from "./mapregions/region39.svg"
import mapRegion40 from "./mapregions/region40.svg"
import mapRegion41 from "./mapregions/region41.svg"
import mapRegion42 from "./mapregions/region42.svg"
import mapRegion43 from "./mapregions/region43.svg"
import mapRegion44 from "./mapregions/region44.svg"
import mapRegion45 from "./mapregions/region45.svg"
import mapRegion46 from "./mapregions/region46.svg"
import mapRegion47 from "./mapregions/region47.svg"
import mapRegion48 from "./mapregions/region48.svg"
import mapRegion49 from "./mapregions/region49.svg"
import mapRegion50 from "./mapregions/region50.svg"
import mapRegion51 from "./mapregions/region51.svg"
import mapRegion52 from "./mapregions/region52.svg"
import mapRegion53 from "./mapregions/region53.svg"
import mapRegion54 from "./mapregions/region54.svg"
import mapRegion55 from "./mapregions/region55.svg"
import mapRegion56 from "./mapregions/region56.svg"
import mapRegion57 from "./mapregions/region57.svg"
import mapRegion58 from "./mapregions/region58.svg"
import mapRegion59 from "./mapregions/region59.svg"
import mapRegion60 from "./mapregions/region60.svg"
import mapRegion61 from "./mapregions/region61.svg"
import mapRegion62 from "./mapregions/region62.svg"
import mapRegion63 from "./mapregions/region63.svg"
import mapRegion64 from "./mapregions/region64.svg"
import mapRegion65 from "./mapregions/region65.svg"
import mapRegion66 from "./mapregions/region66.svg"
import mapRegion67 from "./mapregions/region67.svg"
import mapRegion68 from "./mapregions/region68.svg"
import mapRegion69 from "./mapregions/region69.svg"
import mapRegion70 from "./mapregions/region70.svg"



function Map(props) {
	function checkImageSize() {
		setTimeout(function () {
			const imageWidth = document.getElementById("mapimage").clientWidth
			console.log(imageWidth)
		}, 3000);
	}




	const [height, setHeight] = useState(0);

	useEffect(() => {
		const updateWindowDimensions = () => {
			const newHeight = window.innerHeight;
			setHeight(newHeight);

		};
		checkImageSize()
		window.addEventListener("resize", updateWindowDimensions);

		return () => window.removeEventListener("resize", updateWindowDimensions)

	}, []);






	return (
		<div className="map_section">
			<div className="map_holder">
				<img className="map_image" id="mapimage" src={regionMap} alt="map" onLoad={checkImageSize()}></img>
				<img className="map_regions_outline" id="map_region01" onClick={() => props.clicking("region01")} src={mapRegion01} alt="mapregion01" />
				<img className="map_regions_outline" id="map_region02" onClick={() => props.clicking("region02")} src={mapRegion02} alt="mapregion02" />
				<img className="map_regions_outline" id="map_region03" onClick={() => props.clicking("region03")} src={mapRegion03} alt="mapregion03" />
				<img className="map_regions_outline" id="map_region04" onClick={() => props.clicking("region04")} src={mapRegion04} alt="mapregion04" />
				<img className="map_regions_outline" id="map_region05" onClick={() => props.clicking("region05")} src={mapRegion05} alt="mapregion05" />
				<img className="map_regions_outline" id="map_region06" onClick={() => props.clicking("region06")} src={mapRegion06} alt="mapregion06" />
				<img className="map_regions_outline" id="map_region07" onClick={() => props.clicking("region07")} src={mapRegion07} alt="mapregion07" />
				<img className="map_regions_outline" id="map_region08" onClick={() => props.clicking("region08")} src={mapRegion08} alt="mapregion08" />
				<img className="map_regions_outline" id="map_region09" onClick={() => props.clicking("region09")} src={mapRegion09} alt="mapregion09" />
				<img className="map_regions_outline" id="map_region10" onClick={() => props.clicking("region10")} src={mapRegion10} alt="mapregion10" />
				<img className="map_regions_outline" id="map_region11" onClick={() => props.clicking("region11")} src={mapRegion11} alt="mapregion11" />
				<img className="map_regions_outline" id="map_region12" onClick={() => props.clicking("region12")} src={mapRegion12} alt="mapregion12" />
				<img className="map_regions_outline" id="map_region13" onClick={() => props.clicking("region13")} src={mapRegion13} alt="mapregion13" />
				<img className="map_regions_outline" id="map_region14" onClick={() => props.clicking("region14")} src={mapRegion14} alt="mapregion14" />
				<img className="map_regions_outline" id="map_region15" onClick={() => props.clicking("region15")} src={mapRegion15} alt="mapregion15" />
				<img className="map_regions_outline" id="map_region16" onClick={() => props.clicking("region16")} src={mapRegion16} alt="mapregion16" />
				<img className="map_regions_outline" id="map_region17" onClick={() => props.clicking("region17")} src={mapRegion17} alt="mapregion17" />
				<img className="map_regions_outline" id="map_region18" onClick={() => props.clicking("region18")} src={mapRegion18} alt="mapregion18" />
				<img className="map_regions_outline" id="map_region19" onClick={() => props.clicking("region19")} src={mapRegion19} alt="mapregion19" />
				<img className="map_regions_outline" id="map_region20" onClick={() => props.clicking("region20")} src={mapRegion20} alt="mapregion20" />
				<img className="map_regions_outline" id="map_region21" onClick={() => props.clicking("region21")} src={mapRegion21} alt="mapregion21" />
				<img className="map_regions_outline" id="map_region22" onClick={() => props.clicking("region22")} src={mapRegion22} alt="mapregion22" />
				<img className="map_regions_outline" id="map_region23" onClick={() => props.clicking("region23")} src={mapRegion23} alt="mapregion23" />
				<img className="map_regions_outline" id="map_region24" onClick={() => props.clicking("region24")} src={mapRegion24} alt="mapregion24" />
				<img className="map_regions_outline" id="map_region25" onClick={() => props.clicking("region25")} src={mapRegion25} alt="mapregion25" />
				<img className="map_regions_outline" id="map_region26" onClick={() => props.clicking("region26")} src={mapRegion26} alt="mapregion26" />
				<img className="map_regions_outline" id="map_region27" onClick={() => props.clicking("region27")} src={mapRegion27} alt="mapregion27" />
				<img className="map_regions_outline" id="map_region28" onClick={() => props.clicking("region28")} src={mapRegion28} alt="mapregion28" />
				<img className="map_regions_outline" id="map_region29" onClick={() => props.clicking("region29")} src={mapRegion29} alt="mapregion29" />
				<img className="map_regions_outline" id="map_region30" onClick={() => props.clicking("region30")} src={mapRegion30} alt="mapregion30" />
				<img className="map_regions_outline" id="map_region31" onClick={() => props.clicking("region31")} src={mapRegion31} alt="mapregion31" />
				<img className="map_regions_outline" id="map_region32" onClick={() => props.clicking("region32")} src={mapRegion32} alt="mapregion32" />
				<img className="map_regions_outline" id="map_region33" onClick={() => props.clicking("region33")} src={mapRegion33} alt="mapregion33" />
				<img className="map_regions_outline" id="map_region34" onClick={() => props.clicking("region34")} src={mapRegion34} alt="mapregion34" />
				<img className="map_regions_outline" id="map_region35" onClick={() => props.clicking("region35")} src={mapRegion35} alt="mapregion35" />
				<img className="map_regions_outline" id="map_region36" onClick={() => props.clicking("region36")} src={mapRegion36} alt="mapregion36" />
				<img className="map_regions_outline" id="map_region37" onClick={() => props.clicking("region37")} src={mapRegion37} alt="mapregion37" />
				<img className="map_regions_outline" id="map_region38" onClick={() => props.clicking("region38")} src={mapRegion38} alt="mapregion38" />
				<img className="map_regions_outline" id="map_region39" onClick={() => props.clicking("region39")} src={mapRegion39} alt="mapregion39" />
				<img className="map_regions_outline" id="map_region40" onClick={() => props.clicking("region40")} src={mapRegion40} alt="mapregion40" />
				<img className="map_regions_outline" id="map_region41" onClick={() => props.clicking("region41")} src={mapRegion41} alt="mapregion41" />
				<img className="map_regions_outline" id="map_region42" onClick={() => props.clicking("region42")} src={mapRegion42} alt="mapregion42" />
				<img className="map_regions_outline" id="map_region43" onClick={() => props.clicking("region43")} src={mapRegion43} alt="mapregion43" />
				<img className="map_regions_outline" id="map_region44" onClick={() => props.clicking("region44")} src={mapRegion44} alt="mapregion44" />
				<img className="map_regions_outline" id="map_region45" onClick={() => props.clicking("region45")} src={mapRegion45} alt="mapregion45" />
				<img className="map_regions_outline" id="map_region46" onClick={() => props.clicking("region46")} src={mapRegion46} alt="mapregion46" />
				<img className="map_regions_outline" id="map_region47" onClick={() => props.clicking("region47")} src={mapRegion47} alt="mapregion47" />
				<img className="map_regions_outline" id="map_region48" onClick={() => props.clicking("region48")} src={mapRegion48} alt="mapregion48" />
				<img className="map_regions_outline" id="map_region49" onClick={() => props.clicking("region49")} src={mapRegion49} alt="mapregion49" />
				<img className="map_regions_outline" id="map_region50" onClick={() => props.clicking("region50")} src={mapRegion50} alt="mapregion50" />
				<img className="map_regions_outline" id="map_region51" onClick={() => props.clicking("region51")} src={mapRegion51} alt="mapregion51" />
				<img className="map_regions_outline" id="map_region52" onClick={() => props.clicking("region52")} src={mapRegion52} alt="mapregion52" />
				<img className="map_regions_outline" id="map_region53" onClick={() => props.clicking("region53")} src={mapRegion53} alt="mapregion53" />
				<img className="map_regions_outline" id="map_region54" onClick={() => props.clicking("region54")} src={mapRegion54} alt="mapregion54" />
				<img className="map_regions_outline" id="map_region55" onClick={() => props.clicking("region55")} src={mapRegion55} alt="mapregion55" />
				<img className="map_regions_outline" id="map_region56" onClick={() => props.clicking("region56")} src={mapRegion56} alt="mapregion56" />
				<img className="map_regions_outline" id="map_region57" onClick={() => props.clicking("region57")} src={mapRegion57} alt="mapregion57" />
				<img className="map_regions_outline" id="map_region58" onClick={() => props.clicking("region58")} src={mapRegion58} alt="mapregion58" />
				<img className="map_regions_outline" id="map_region59" onClick={() => props.clicking("region59")} src={mapRegion59} alt="mapregion59" />
				<img className="map_regions_outline" id="map_region60" onClick={() => props.clicking("region60")} src={mapRegion60} alt="mapregion60" />
				<img className="map_regions_outline" id="map_region61" onClick={() => props.clicking("region61")} src={mapRegion61} alt="mapregion61" />
				<img className="map_regions_outline" id="map_region62" onClick={() => props.clicking("region62")} src={mapRegion62} alt="mapregion62" />
				<img className="map_regions_outline" id="map_region63" onClick={() => props.clicking("region63")} src={mapRegion63} alt="mapregion63" />
				<img className="map_regions_outline" id="map_region64" onClick={() => props.clicking("region64")} src={mapRegion64} alt="mapregion64" />
				<img className="map_regions_outline" id="map_region65" onClick={() => props.clicking("region65")} src={mapRegion65} alt="mapregion65" />
				<img className="map_regions_outline" id="map_region66" onClick={() => props.clicking("region66")} src={mapRegion66} alt="mapregion66" />
				<img className="map_regions_outline" id="map_region67" onClick={() => props.clicking("region67")} src={mapRegion67} alt="mapregion67" />
				<img className="map_regions_outline" id="map_region68" onClick={() => props.clicking("region68")} src={mapRegion68} alt="mapregion68" />
				<img className="map_regions_outline" id="map_region69" onClick={() => props.clicking("region69")} src={mapRegion69} alt="mapregion69" />
				<img className="map_regions_outline" id="map_region70" onClick={() => props.clicking("region70")} src={mapRegion70} alt="mapregion70" />

			</div>



		</div>

	)
}

export default Map
