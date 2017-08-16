import { Header, Left, Body, Right, Button, Icon, Title , List, ListItem } from 'native-base';
import {View, Dimensions }   from "react-native"; 
const {width, height} = Dimensions.get('window');

<View style= {{width: width+50}}>
      <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
          </Header>
</View>