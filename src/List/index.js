import { Button, Card, CircularProgress, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const styles = {
  card: {
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    py: '20px',
  },
};
export default function ContainerList({
  dataP,
  renderItem,
  GridStyleItem,
  totalP,
  loadMoreP,
  loadingP,
  id,
  spacing,
}) {
  const [data, setData] = useState(dataP);
  const [total, setTotal] = useState(totalP);
  const [loading, setLoading] = useState(loadingP);

  useEffect(() => {
    setData(dataP);
  }, [dataP]);

  useEffect(() => {
    setLoading(loadingP);
  }, [loadingP]);

  useEffect(() => {
    setTotal(totalP);
  }, [totalP]);

  return (
    <Grid container spacing={spacing}>
      {data.length > 0 ? (
        data.map((row, idx) => (
          <Grid
            item
            xs={12}
            {...GridStyleItem}
            key={`${id}_${row.id || 'rand_' + idx}`}
          >
            {renderItem(row, idx)}
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Card sx={styles.card}>
            {loading ? <CircularProgress size={40} /> : 'NO DATA FOUND'}
          </Card>
        </Grid>
      )}
      <Grid item xs={12} sx={{ textAlign: 'center', mt: '10px' }}>
        {data.length < total && loadMoreP ? (
          <Button
            variant="contained"
            color="info"
            size="small"
            onClick={loadMoreP}
          >
            {loading ? (
              <CircularProgress size={22} sx={{ color: 'white' }} />
            ) : (
              'Load More'
            )}
            {` ${data.length}/${total}`}
          </Button>
        ) : null}
      </Grid>
    </Grid>
  );
}

ContainerList.propTypes = {
  renderItem: PropTypes.func.isRequired,
  dataP: PropTypes.array.isRequired,
  GridStyleItem: PropTypes.object,
  totalP: PropTypes.number,
  loadMoreP: PropTypes.func,
  loadingP: PropTypes.bool,
  id: PropTypes.string,
  spacing: PropTypes.number,
};

ContainerList.defaultProps = {
  dataP: [],
  renderItem: null,
  loadingP: false,
  totalP: 10,
  id: '',
  spacing: 3,
};
