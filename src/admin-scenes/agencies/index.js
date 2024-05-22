import { useEffect, useState, useRef } from 'react';
import { useTheme, Button, Popover, Box, Typography } from '@mui/material';
import { tokens } from '../../themes';
import Header from '../../components/Header';
import axios from 'axios';
import {
  DataSheetGrid,
  checkboxColumn,
  textColumn,
  keyColumn,
} from 'react-datasheet-grid';
import 'react-datasheet-grid/dist/style.css';
import { createAddRowsComponent } from 'react-datasheet-grid';
import { createContextMenuComponent, ContextMenuItem } from 'react-datasheet-grid';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Agencies = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState();
  const [btnActive, setbtnActive] = useState(false);
  const [disabled, setDisabled] = useState({
    client: false,
    city: false,
    address: false,
    time: false,
    number: false,
    whatsapp: false,
    email: false,
    coordinates: false,
  })
  useEffect(() => {
    axios.get('/data/maps').then((resp) => {
      // axios.get('/map.json').then((resp) => {
      const allPersons = resp.data;
      setData(allPersons);
    });
  }, []);


  const columns = [
    { ...keyColumn('client', textColumn), title: 'Магазин', minWidth: 200, },
    { ...keyColumn('city', textColumn), title: 'Город', minWidth: 200, },
    { ...keyColumn('address', textColumn), title: 'Адрес', minWidth: 500, shrink: 0, },
    { ...keyColumn('time', textColumn), title: 'Часы работы', minWidth: 300, },
    { ...keyColumn('number', textColumn), title: 'Номер телефона', minWidth: 150, },
    { ...keyColumn('whatsapp', textColumn), title: 'Whatsapp', minWidth: 150, },
    { ...keyColumn('email', textColumn), title: 'E-mail', minWidth: 200, },
    { ...keyColumn('coordinates', textColumn), title: 'Координаты', minWidth: 200, },
  ]

  const AddRows = createAddRowsComponent({
    button: 'Добавить',
    unit: 'Строку',
  })

  const ContextMenu = createContextMenuComponent((item) => {
    if (item.type === 'INSERT_ROW_BELLOW') {
      return <>Вставить строку ниже</>
    }
    if (item.type === 'DELETE_ROW') {
      return <>Удалить строку</>
    }
    if (item.type === 'COPY') {
      return <>Копировать</>
    }
    if (item.type === 'PASTE') {
      return <>Вставить</>
    }
    if (item.type === 'CUT') {
      return <>Вырезать</>
    }
    if (item.type === 'DUPLICATE_ROW') {
      return <>Дублировать строку</>
    }

    /*...*/
  })
  const applyChanges = (value) => {
    console.log(value)
    setData(value);
    setbtnActive(true);
  }

  const saveMap = () => {
    let formData = new FormData();
    formData.append('data', JSON.stringify(data));
    axios.post('/saveMapChanges', formData, {
      headers: {
        'Content-Type': "multipart/form-data"
      }
    })
      .then((response) => {
        console.log(response);
        setbtnActive(false);
      });
  }

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
  };

  const exportToExcel = (jsonObject, fileName) => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(jsonObject);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const s2ab = (s) => {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xff;
      }
      return buf;
    };
    saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), `${fileName}.xlsx`);
  };
  const inportExcel = useRef(null);
  const handleInput = () => {
    inportExcel.current.click();
  }
  const handleFileUpload = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setData(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }


  return (
    <div>
      <Header title='Представительства' subtitle='Добавление и удаление представительств' />
      <Button variant="contained" onClick={handleInput} sx={{ ml: '10px', mb: '5px' }} startIcon={<FileUploadIcon />}>
        Импорт
      </Button>
      <Button variant="contained" onClick={() => exportToExcel(data, 'hello')} sx={{ ml: '10px', mb: '5px' }} startIcon={<FileDownloadIcon />} >
        Экспорт
      </Button>
      <input type="file" ref={inportExcel} onChange={handleFileUpload} className='modal__upload' />
      <div className='agencies__container'>
        <DataSheetGrid
          value={data}
          onChange={(value) => applyChanges(value)}
          columns={columns}
          addRowsComponent={AddRows}
          contextMenuComponent={ContextMenu}
          height={500}
          rowHeight={50}
          gutterColumn={{ basis: 50 }}
          cellClassName={'agencies__cell'}
        />
        <Button
          // fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3, mb: 2, backgroundColor: '#C79D5E' }}
          onClick={saveMap}
        >
          Сохранить изменения
        </Button>
        {/* <button className={`agencies__apply ${btnActive ? 'agencies__apply--active' : ''}`} onClick={saveMap}>Сохранить изменения</button> */}
      </div>
    </div >
  )
}
export default Agencies;