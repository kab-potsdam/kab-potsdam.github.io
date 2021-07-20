import React, { useState } from "react";

import { StyleSheet } from "../../lib";
import { View, Text, Button, Icon } from "..";
import presets from "./infoCard.module.scss";
import ContentCardProps from "./infoCard.props";
import down from "./down.svg";
import right from "./right.svg";
import map from "./map.svg";
import phone from "./phone.svg";
import link from "./link.svg";


const InfoCard: React.FC<ContentCardProps> = (props) => {
  const {
    children,
    className,
    preset = "default",
    style,
    object,
    ...rest
  } = props;

  const [ expanded, setExpanded ] = useState(() => preset === "default");

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }


  return (
    <View
      {...rest}
      className={StyleSheet.className(presets[expanded ? "default" : "small"], className)}
      style={StyleSheet.style(style)}
    >
      <View className={presets.header}>
        <Button onClick={toggleExpanded} preset="flat" icon={<Icon src={expanded ? down : right} />} >
          <Text text={object.name} preset="bold" />
        </Button>
        <View className={presets.icons}>
          {object.ref && <Button className={presets.icon} preset="flat" icon={<Icon src={link}/>}/>}
          {object.tel && <Button className={presets.icon} preset="flat" icon={<Icon src={phone}/>}/>}
          <Button className={presets.icon} preset="flat" icon={<Icon src={map}/>}/>
        </View>
      </View>
      <View className={presets.data}>
        <View className={presets.details}>
          <View className={`${presets.address} ${presets.element}`}>
            <Text text="Addresse: " preset="bold" />
            <Text text={object.address.location} />
            <Text text={object.address.PLZ} />
          </View>
          {object.tel && <View className={presets.element}>
            <Text text="Telefonnummer: " preset="bold" />
            <a href={`tel:${object.tel}`}>{object.tel}</a>
          </View>}
          {object.ref && <View className={presets.element}>
            <Text text="Website: " preset="bold" />
            <a href={object.ref}>{object.ref}</a>
          </View>}
        </View>
        <View className={presets.map} dangerouslySetInnerHTML={ { __html:object.map} }/>
      </View>

      {children}
    </ View>
  );
};

export default InfoCard;
