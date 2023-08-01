import os
import glob
import warnings
import csv
import threading
import logging
# import logging.config


from pymavlink import mavutil
from pymavlink.dialects.v20 import common as mavlink2

mav = mavlink2.MAVLink(None)

DEFAULT_FILENAME = 'Flight_Log_Sortie'
DEFAULT_EXTENSION = 'csv'
DEFAULT_EXTENSION_BIN = 'bin'

# create logger
logger = logging.getLogger('simple_example')
logger.setLevel(logging.DEBUG)

# create console handler and set level to debug
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)

# create formatter
formatter = logging.Formatter('[%(levelname)s]  %(message)s')

# add formatter to ch
ch.setFormatter(formatter)

# add ch to logger
logger.addHandler(ch)

class FileLogger(threading.Thread):
    def __init__(self, filename=None):
        threading.Thread.__init__(self)
        self.t1 = threading.Thread(target = self.log_mavlink_msg)
        self.t1.daemon = True
        self.savepath = os.path.join(os.getcwd(), 'logs')
        logger.debug(f'Log files will be saved in {self.savepath}')
        
        if not os.path.exists(self.savepath):
            os.makedirs(self.savepath)
        self.create_log_files(filename)
        self.file_counter = 0
        self.csv_writer = csv.writer(self.file)
        
        # # create a lock
        # self.lock = threading.Lock()
    
    def reshape_filename(self, filename):
        assert(filename==None or isinstance(filename, str))
        filename = DEFAULT_FILENAME if filename is None else filename
        
        split_names = filename.split('.')
        if len(split_names)>1:
            if not (split_names[-1].lower==DEFAULT_EXTENSION_BIN or split_names[-1].lower==DEFAULT_EXTENSION):
                self.deprecation_warning(f'Filename should not contain extension other than {DEFAULT_EXTENSION} or {DEFAULT_EXTENSION_BIN}. Extension will be added automatically.')
            filename = "".join(split_names[:-1])
        return filename
    
    def create_log_files(self, filename=None):
        self.filename = self.reshape_filename(filename)
        
        counter = []
        for filename in glob.glob(os.path.join(self.savepath, self.filename+'*')):
            counter.append(filename.split('.')[-2].split('_')[-1])
        
        self.file_counter = max([int(i) for i in counter]) + 1 if len(counter)>0 else 1
        
        self.file_path = os.path.join(self.savepath, f'{self.filename}_{self.file_counter}.{DEFAULT_EXTENSION}')
        self.file_bin_path = os.path.join(self.savepath, f'{self.filename}_{self.file_counter}.{DEFAULT_EXTENSION_BIN}')
        
        self.file = open(self.file_path, 'w', newline='')
        self.file_bin = open(self.file_bin_path, 'wb')
        self.csv_writer = csv.writer(self.file)
        
        logger.info(f'Log files created: {self.file_path}')
        logger.info(f'Log files created: {self.file_bin_path}')
        
        self.file.close()
        self.file_bin.close()
        
        logger.debug(f'self.file: {self.file}')
        logger.debug(f'self.file_bin: {self.file_bin}')
        
    def log_mavlink_msg(self, msg, *args, **kwargs):
        try:
            msg.pack(mav)
        
            fieldnames = msg.get_fieldnames()
            msgId = msg.get_msgId()

            values = [msgId] + [getattr(msg, fieldname) for fieldname in fieldnames]
        
            self.file = open(self.file_path, 'a', newline='')
            self.file_bin = open(self.file_bin_path, 'ab')
            self.csv_writer = csv.writer(self.file)
        
            self.csv_writer.writerow(values)
            self.file_bin.write(msg.get_msgbuf())
        
            self.file.flush()
            self.file_bin.flush()
          
            self.file.close()
            self.file_bin.close()

        except:
            self.file.close()
            self.file_bin.close()
        
    
    def deprecation_warning(self, msg, *args, **kwargs):
        warnings.warn(msg, *args, **kwargs)


if __name__=="__main__":
    a_logger = FileLogger()
    
    # for _ in range(50):
    #     a_logger.log('Hello World')
        
    for i in range(5000):
        a_logger.log_mavlink_msg(mav.gps_raw_int_encode(0, 1, 11+i, 6+i, 0, 0, 0, 0, 0, 0))
    # a_logger.log()
    