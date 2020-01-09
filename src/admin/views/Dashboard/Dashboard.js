import React, {useEffect, useState} from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "./../../components/Grid/GridItem.js";
import GridContainer from "./../../components/Grid/GridContainer.js";
import Table from "./../../components/Table/Table.js";
import Danger from "./../../components/Typography/Danger.js";
import Card from "./../../components/Card/Card.js";
import CardHeader from "./../../components/Card/CardHeader.js";
import CardIcon from "./../../components/Card/CardIcon.js";
import CardBody from "./../../components/Card/CardBody.js";
import CardFooter from "./../../components/Card/CardFooter.js";
import { connect } from "react-redux";
import { fetch } from "../../../store/actions/admin";

import styles from "./../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const Dashboard = props => {
  useEffect(() => {
    props.onFetch('/order/');
    props.onFetch('/delivery/');
    props.onFetch('/user/');
    props.onFetch('/restaurant/');
    props.onFetch('/table/');
    props.onFetch('/category/');
    props.onFetch('/food/');
    props.onFetch('/tables/');
    props.onFetch('/addition/');
  }, []);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Total Orders</p>
              <h3 className={classes.cardTitle}>
                {props.orders.length} <small>Orders</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  View orders
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Deliveries</p>
              <h3 className={classes.cardTitle}>{props.deliveries.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Current Users</p>
              <h3 className={classes.cardTitle}>{props.users.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Restaurants</p>
              <h3 className={classes.cardTitle}>{props.restaurants.length}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Orders</h4>
              <p className={classes.cardCategoryWhite}>
                Recent Orders
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={Object.keys(props.orders[0]).map(key => {
                  const keys = ['id', 'total_price', 'status', 'table'];
                  const values =  [];
                  if (keys.find(item => key === item) !== undefined) {
                    values.push(key);
                  }
                  return values;
                })}
                tableData={props.orders.slice(0, 5).map(order => {
                  return [order.id, order.total_price, order.status, order.table];
                })}

              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Deliveries</h4>
              <p className={classes.cardCategoryWhite}>
                Recent Deliveries
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={Object.keys(props.deliveries[0]).map(key => {
                  const keys = ['id', 'first_name', 'last_name', 'total_price', 'status'];
                  const values =  [];
                  if (keys.find(item => key === item) !== undefined) {
                    values.push(key);
                  }
                  return values;
                })}
                tableData={props.deliveries.slice(0, 5).map(delivery => {
                  return [delivery.id, delivery.first_name, delivery.last_name, delivery.total_price, delivery.status];
                })}

              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    orders: state.admin.orders,
    deliveries: state.admin.deliveries,
    users: state.admin.users,
    restaurants: state.admin.restaurants,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetch: url => dispatch(fetch(url)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
