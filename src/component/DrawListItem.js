import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export const DrawListItem = () => {
    return (
        <div>
            <ListItem button>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="지역별" />
            </ListItem>
            <ListItem button>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="분야별" />
            </ListItem>
            <ListItem button>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="기간별" />
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="위시리스트" />
            </ListItem>
            <ListItem button>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="내 정보" />
            </ListItem>
        </div>
    );
};
