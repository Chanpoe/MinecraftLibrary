import config
import pymongo

class DatabaseController():
    _instance=None
    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(DatabaseController, cls).__new__(cls, *args, **kwargs)
        return cls._instance
    def __init__(self):
        self.db=pymongo.MongoClient(f"mongodb://{config.USERNAME}:{config.PASSWORD}@{config.IP}")["MinecraftLibrary"]

    def get_item(self,col_name,item_name):
        col=self.db[col_name]
        output=[]
        for item in col.find():
            if item.get("name",'')==item_name:
                return str(item)
        return "collection request failed!!"

if __name__=="__main__":
    a=DatabaseController()
    b=DatabaseController()
    print(a is b)