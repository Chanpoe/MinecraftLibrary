import config
import pymongo

class DatabaseController():
    def __init__(self):
        self.db=pymongo.MongoClient(f"mongodb://{config.USERNAME}:{config.PASSWORD}@{config.IP}")["MinecraftLibrary"]

    def get_item(self,col_name,item_name):
        col=self.db[col_name]
        output=[]
        for item in col.find():
            if item.get("name",'')==item_name:
                return str(item)
        return "collection request failed!!"