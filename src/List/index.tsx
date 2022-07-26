import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card, CircularProgress, Grid } from '@mui/material';

const styles = {
  card: {
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    py: '20px',
  },
};

interface Props {
  dataP: { id: string | number }[];
  renderItem: (row: object, idx: number) => React.ReactNode | null;
  GridStyleItem: object;
  totalP: number;
  loadMoreP: () => void;
  loadingP: boolean;
  id: string | number;
  spacing: number;
}

export default function ContainerList({
  dataP = [],
  renderItem,
  GridStyleItem,
  totalP = 10,
  loadMoreP,
  loadingP = false,
  id = '',
  spacing = 3,
}: Props) {
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
          <Grid item xs={12} {...GridStyleItem} key={`${id}_${row.id || 'rand_' + idx}`}>
            {renderItem(row, idx)}
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Card sx={styles.card}>{loading ? <CircularProgress size={40} /> : 'NO DATA FOUND'}</Card>
        </Grid>
      )}
      <Grid item xs={12} sx={{ textAlign: 'center', mt: '10px' }}>
        {data.length < total && loadMoreP ? (
          <Button variant="contained" color="info" size="small" onClick={loadMoreP}>
            {loading ? <CircularProgress size={22} sx={{ color: 'white' }} /> : 'Load More'}
            {` ${data.length}/${total}`}
          </Button>
        ) : null}
      </Grid>
    </Grid>
  );
}
