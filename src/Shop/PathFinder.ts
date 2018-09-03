class PathFinder{
    private _pMap:Map

    public constructor(){
    }

    public SetMap(pMap:Map):void{
        this._pMap = pMap
    }

    public Serach(sourceGrid:number,targetGrid:number):Array<egret.Point>{
        if(!this._pMap.IsValidGrid(sourceGrid) || !this._pMap.IsValidGrid(targetGrid))
            return 
        
        let arOpened = new Array<number>()
        let arClosed = new Array<number>()
        let arRes    = new Array<egret.Point>()

        let bRes     = this._Serach(sourceGrid
        , targetGrid
        , arOpened
        , arClosed)

        if(!bRes)
        return null

        for(let iIndex = 0;iIndex<arClosed.length;++iIndex){
            
        }
    }

    private _Serach(curGrid:number,targetGrid:number,arOpened:Array<number>,arClosed:Array<number>):boolean{

    }
}