import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Plus, Trash2, Baby, ShoppingBag, Wind, Zap, AlertCircle, ChevronDown, Shirt, Sparkles, GripVertical as Grips, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { INITIAL_PACKING_LIST, PACKING_RECOMMENDATIONS, DAILY_OUTFIT_RECOMMENDATIONS } from '../data/packing';
import { PackingItem, PackingCategory } from '../types';
import { useTripState } from '../lib/sync';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  useDroppable,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableCategorySection: React.FC<{
  category: PackingCategory;
  categoryItems: PackingItem[];
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  toggleItem: (id: string) => void;
  deleteItem: (id: string) => void;
  updateItemName: (id: string, newName: string) => void;
  getCategoryImage: (cat: PackingCategory) => React.ReactNode;
}> = ({ 
  category, 
  categoryItems, 
  isCollapsed, 
  onToggleCollapse, 
  toggleItem, 
  deleteItem, 
  updateItemName,
  getCategoryImage 
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: `section-${category}`, data: { type: 'Section', category } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const packedInCategory = categoryItems.filter(i => i.isPacked).length;

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className={`mb-6 ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="flex items-center gap-2 mb-4 group/section">
        <div 
          {...attributes} 
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-2 text-gray-300 hover:text-med-blue transition-colors"
        >
          <Grips className="w-4 h-4" />
        </div>
        
        <button 
          onClick={onToggleCollapse}
          className="flex-1 flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-active:scale-90 ${
              category === 'Family Essentials' ? 'bg-med-coral/10 text-med-coral' :
              category === 'Baby Clothes' ? 'bg-med-orange/10 text-med-orange' :
              category === 'Adult Apparel' ? 'bg-med-azure/10 text-med-azure' :
              category === 'Beach Gear' ? 'bg-med-yellow/10 text-med-yellow' :
              'bg-med-blue/10 text-med-blue'
            }`}>
              {getCategoryImage(category)}
            </div>
            <div>
              <h3 className="text-xl font-black text-med-dark uppercase tracking-tight">{category}</h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-0.5">
                {packedInCategory} / {categoryItems.length} PACKED
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isCollapsed ? -90 : 0 }}
            className="text-gray-300 group-hover/section:text-med-blue transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
      </div>
      
      <AnimatePresence initial={false}>
        {!isCollapsed && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <DroppableContainer id={`category-${category}`} category={category}>
              <SortableContext 
                items={categoryItems.map(i => i.id)}
                strategy={verticalListSortingStrategy}
              >
                {categoryItems.map(item => (
                  <SortablePackingItem 
                    key={item.id}
                    item={item}
                    toggleItem={toggleItem}
                    deleteItem={deleteItem}
                    updateItemName={updateItemName}
                  />
                ))}
              </SortableContext>
              
              {categoryItems.length === 0 && (
                <div className="p-8 border-2 border-dashed border-gray-100 rounded-3xl flex flex-col items-center justify-center text-center opacity-40">
                   <Sparkles className="w-8 h-8 text-med-blue mb-2" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-med-dark">Drop items here</p>
                </div>
              )}
            </DroppableContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DroppableContainer: React.FC<{
  id: string;
  category: PackingCategory;
  children: React.ReactNode;
}> = ({ id, category, children }) => {
  const { setNodeRef } = useDroppable({
    id,
    data: { category }
  });

  return (
    <div ref={setNodeRef} className="grid gap-2 pb-4 min-h-[50px]">
      {children}
    </div>
  );
};

const EditableItemText: React.FC<{ 
  text: string; 
  isPacked: boolean; 
  onSave: (newText: string) => void 
}> = ({ text, isPacked, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  if (isEditing) {
    return (
      <input
        autoFocus
        className="flex-1 text-sm font-bold bg-transparent border-b border-med-blue outline-none text-med-dark py-0"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          setIsEditing(false);
          onSave(value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setIsEditing(false);
            onSave(value);
          }
        }}
      />
    );
  }

  return (
    <span 
      onClick={() => setIsEditing(true)}
      className={`flex-1 text-sm font-bold cursor-pointer transition-all ${
        isPacked ? 'text-gray-400 line-through' : 'text-med-dark hover:text-med-blue'
      }`}
    >
      {text}
    </span>
  );
};

const SortablePackingItem: React.FC<{
  item: PackingItem;
  toggleItem: (id: string) => void;
  deleteItem: (id: string) => void;
  updateItemName: (id: string, newName: string) => void;
  isOverlay?: boolean;
}> = ({ item, toggleItem, deleteItem, updateItemName, isOverlay }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, data: { type: 'Item', item } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Swipe-right-to-delete threshold (in px). Past this, releasing fires deleteItem.
  const SWIPE_THRESHOLD = 110;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative ${isDragging ? 'opacity-50' : 'opacity-100'} ${isOverlay ? 'z-50' : ''}`}
    >
      {/* Red "delete" background revealed when the user swipes right */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-med-coral/80 to-med-coral text-white flex items-center justify-start pl-5 gap-2 pointer-events-none">
        <Trash2 className="w-5 h-5" />
        <span className="text-[10px] font-black uppercase tracking-widest">Swipe to delete</span>
      </div>

      {/* The actual row — slides on top of the red background */}
      <motion.div
        drag="x"
        dragDirectionLock
        dragConstraints={{ left: 0, right: 240 }}
        dragElastic={{ left: 0, right: 0.6 }}
        onDragEnd={(_, info) => {
          if (info.offset.x > SWIPE_THRESHOLD) {
            deleteItem(item.id);
          }
        }}
        whileTap={{ cursor: 'grabbing' }}
        className={`relative group flex items-center gap-4 bg-white p-4 rounded-2xl border transition-colors ${
          item.isPacked ? 'border-transparent bg-gray-50' : 'border-gray-50 shadow-sm'
        } ${isOverlay ? 'shadow-xl scale-105 border-med-blue' : ''}`}
      >
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-1 text-gray-300 hover:text-med-blue transition-colors"
        >
          <Grips className="w-3.5 h-3.5" />
        </div>

        <button
          onClick={() => toggleItem(item.id)}
          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
            item.isPacked
              ? 'bg-med-blue text-white shadow-lg shadow-med-blue/30'
              : 'bg-gray-100 text-transparent border border-gray-200'
          }`}
        >
          <Check className="w-4 h-4" />
        </button>

        <EditableItemText
          text={item.name}
          isPacked={item.isPacked}
          onSave={(newName) => updateItemName(item.id, newName)}
        />
      </motion.div>
    </div>
  );
};

export const PackingTab = () => {
  const trip = useTripState();

  // Items = bundled defaults + user-added custom items, MINUS anything the
  // user swiped to delete (tracked in trip.hiddenIds).
  const items = useMemo<PackingItem[]>(() => {
    const base = [...INITIAL_PACKING_LIST, ...trip.customPacking];
    const packed = new Set(trip.packedIds);
    const hidden = new Set(trip.hiddenIds);
    return base
      .filter((it) => !hidden.has(it.id))
      .map((it) => ({ ...it, isPacked: packed.has(it.id) }));
  }, [trip.packedIds, trip.customPacking, trip.hiddenIds]);

  // Last deleted snapshot — drives the "Undo" toast. Cleared after a few seconds.
  const [lastDeleted, setLastDeleted] = useState<{
    item: PackingItem;
    wasCustom: boolean;
    wasPacked: boolean;
    deletedAt: number;
  } | null>(null);

  useEffect(() => {
    if (!lastDeleted) return;
    const id = setTimeout(() => setLastDeleted(null), 6000);
    return () => clearTimeout(id);
  }, [lastDeleted]);

  // Drag-to-reorder ordering is device-local (presentation only) — not synced
  // to Firestore. We accept any reorder operation by no-op'ing it for now;
  // a proper implementation would store a sortOrder field per item.
  const setItems = (_next: PackingItem[] | ((prev: PackingItem[]) => PackingItem[])) => {
    /* intentionally no-op until per-item sort order is synced */
  };

  const [categories, setCategories] = useState<PackingCategory[]>(['Family Essentials', 'Baby Clothes', 'Adult Apparel', 'Beach Gear', 'Electronics']);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<'Section' | 'Item' | null>(null);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<PackingCategory>('Family Essentials');
  const [isExpanding, setIsExpanding] = useState(false);
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const toggleCategory = (category: string) => {
    const newCollapsed = new Set(collapsedCategories);
    if (newCollapsed.has(category)) {
      newCollapsed.delete(category);
    } else {
      newCollapsed.add(category);
    }
    setCollapsedCategories(newCollapsed);
  };

  const packedCount = items.filter(i => i.isPacked).length;
  const progress = (packedCount / items.length) * 100;

  const toggleItem = (id: string) => {
    trip.setPacked(id, !trip.packedIds.includes(id));
  };

  const updateItemName = (id: string, newName: string) => {
    // Renames are only allowed on user-added (custom) items.
    if (trip.customPacking.some((i) => i.id === id)) {
      trip.renameCustomItem(id, newName);
    }
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: PackingItem = {
      id: 'c-' + Math.random().toString(36).slice(2, 11),
      name: newItemName,
      category: newItemCategory,
      isPacked: false,
      isCustom: true,
    };

    trip.addCustomItem(newItem);
    setNewItemName('');
  };

  const deleteItem = (id: string) => {
    // Find the item (custom or bundled) so we can preserve enough info to undo.
    const customMatch = trip.customPacking.find((i) => i.id === id);
    const bundledMatch = customMatch ? null : INITIAL_PACKING_LIST.find((i) => i.id === id);
    const matched = customMatch || bundledMatch;
    if (!matched) return;

    const wasPacked = trip.packedIds.includes(id);

    if (customMatch) {
      // User-added item — really remove it from the list.
      trip.removeCustomItem(id);
    } else {
      // Bundled item — hide it (so it disappears from the list without
      // touching the hardcoded INITIAL_PACKING_LIST).
      trip.setHidden(id, true);
    }
    if (wasPacked) trip.setPacked(id, false);

    setLastDeleted({
      item: matched,
      wasCustom: !!customMatch,
      wasPacked,
      deletedAt: Date.now(),
    });
  };

  const undoDelete = () => {
    if (!lastDeleted) return;
    const { item, wasCustom, wasPacked } = lastDeleted;
    if (wasCustom) {
      trip.addCustomItem(item);
    } else {
      trip.setHidden(item.id, false);
    }
    if (wasPacked) trip.setPacked(item.id, true);
    setLastDeleted(null);
  };

  const getCategoryImage = (cat: PackingCategory) => {
    switch (cat) {
      case 'Family Essentials': return <Baby className="w-5 h-5" />;
      case 'Baby Clothes': return <Shirt className="w-5 h-5" />;
      case 'Adult Apparel': return <ShoppingBag className="w-5 h-5" />;
      case 'Beach Gear': return <Wind className="w-5 h-5" />;
      case 'Electronics': return <Zap className="w-5 h-5" />;
      default: return <ShoppingBag className="w-5 h-5" />;
    }
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    setActiveType(event.active.data.current?.type);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (activeType === 'Section') return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const activeItem = items.find((i) => i.id === activeId);
    if (!activeItem) return;

    const isOverAContainer = String(overId).startsWith('category-');
    let overCategory: PackingCategory | null = null;
    
    if (isOverAContainer) {
      overCategory = (over.data.current as any).category;
    } else {
      const overItem = items.find((i) => i.id === overId);
      if (overItem) overCategory = overItem.category;
    }

    if (overCategory && activeItem.category !== overCategory) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((i) => i.id === activeId);
        const newIndex = isOverAContainer 
          ? prevItems.length 
          : prevItems.findIndex((i) => i.id === overId);

        const newItems = [...prevItems];
        newItems[oldIndex] = { ...activeItem, category: overCategory! };
        return arrayMove(newItems, oldIndex, newIndex);
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      if (activeType === 'Section') {
        const oldIndex = categories.indexOf(active.data.current?.category);
        const newIndex = categories.indexOf(over.data.current?.category);
        if (oldIndex !== -1 && newIndex !== -1) {
          setCategories(arrayMove(categories, oldIndex, newIndex));
        }
      } else {
        const activeId = active.id;
        const overId = over.id;

        const oldIndex = items.findIndex((i) => i.id === activeId);
        const activeItem = items[oldIndex];

        const isOverAContainer = String(overId).startsWith('category-');
        let overCategory: PackingCategory | null = null;
        
        if (isOverAContainer) {
          overCategory = (over.data.current as any).category;
        } else {
          const overItem = items.find((i) => i.id === overId);
          if (overItem) overCategory = overItem.category;
        }

        if (overCategory && activeItem.category !== overCategory) {
            const newItems = [...items];
            newItems[oldIndex] = { ...activeItem, category: overCategory };
            const newIndex = isOverAContainer ? newItems.length : items.findIndex((i) => i.id === overId);
            setItems(arrayMove(newItems, oldIndex, newIndex));
        } else {
            const newIndex = items.findIndex((i) => i.id === overId);
            setItems(arrayMove(items, oldIndex, newIndex));
        }
      }
    }
    
    setActiveId(null);
    setActiveType(null);
  };

  return (
    <div className="space-y-8">
      {/* Progress Header */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 mb-6 overflow-hidden relative">
        <div className="relative z-10">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Trip Prep</p>
              <h2 className="text-4xl font-black text-med-dark capitalize leading-none">PACKING PROGRESS</h2>
            </div>
            <div className="text-right">
              <p className="text-4xl font-black text-med-blue leading-none">{Math.round(progress)}%</p>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{packedCount} of {items.length} Items</p>
            </div>
          </div>
          
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full rounded-full transition-all duration-1000"
              style={{
                background: `linear-gradient(to right, #FF595E, #0077B6)`
              }}
            />
          </div>
        </div>
      </div>

      {/* Sticky Add Item Section */}
      <div className="sticky top-[52px] z-30 bg-med-bg/80 backdrop-blur-xl pt-2 pb-6 -mx-6 px-6 mb-4">
        <motion.div 
          layout
          initial={false}
          animate={{ height: isExpanding ? 'auto' : '56px' }}
          className="bg-med-dark rounded-2xl shadow-xl border border-white/10 overflow-hidden"
        >
          <form onSubmit={addItem} className={isExpanding ? "p-1.5" : "h-full"}>
            {!isExpanding ? (
              <button 
                type="button"
                onClick={() => setIsExpanding(true)}
                className="w-full h-[54px] flex items-center justify-center gap-4 px-6 text-white/50 hover:text-white transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-med-yellow">
                  <Plus className="w-5 h-5" />
                </div>
                <span className="text-[12px] font-black uppercase tracking-[0.2em] leading-none mt-1">
                  Quick Add Item
                </span>
              </button>
            ) : (
              <div className="p-4 space-y-6">
                <div className="flex justify-between items-center text-white">
                  <h4 className="text-[10px] font-black text-med-yellow uppercase tracking-[0.3em]">New Packing Item</h4>
                  <button
                    type="button"
                    onClick={() => setIsExpanding(false)}
                    aria-label="Close"
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/10 text-white/60 hover:text-white hover:bg-white/20 active:scale-90 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <input 
                  autoFocus
                  type="text" 
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="What are we forgetting?"
                  className="w-full bg-transparent text-white text-xl font-black placeholder:text-white/20 focus:outline-none border-b border-white/10 pb-3"
                />

                <div className="space-y-3">
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Select Category</p>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setNewItemCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                          newItemCategory === cat 
                          ? 'bg-med-yellow text-med-dark shadow-lg shadow-med-yellow/20' 
                          : 'bg-white/10 text-white/60 hover:bg-white/20'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={!newItemName.trim()}
                  className="w-full py-4 bg-med-blue text-white rounded-xl font-black uppercase tracking-[0.3em] text-[10px] shadow-xl shadow-med-blue/20 hover:bg-med-azure transition-all disabled:opacity-50 disabled:grayscale"
                >
                  Add To List
                </button>
              </div>
            )}
          </form>
        </motion.div>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="space-y-6">
          <SortableContext 
            items={categories.map(c => `section-${c}`)}
            strategy={verticalListSortingStrategy}
          >
            {categories.map(category => (
              <SortableCategorySection
                key={category}
                category={category}
                categoryItems={items.filter(i => i.category === category)}
                isCollapsed={collapsedCategories.has(category)}
                onToggleCollapse={() => toggleCategory(category)}
                toggleItem={toggleItem}
                deleteItem={deleteItem}
                updateItemName={updateItemName}
                getCategoryImage={getCategoryImage}
              />
            ))}
          </SortableContext>
        </div>

        <DragOverlay dropAnimation={{
          sideEffects: defaultDropAnimationSideEffects({
            styles: {
              active: {
                opacity: '0.5',
              },
            },
          }),
        }}>
          {activeId ? (
            activeType === 'Item' ? (
              <SortablePackingItem 
                item={items.find(i => i.id === activeId)!}
                toggleItem={() => {}}
                deleteItem={() => {}}
                updateItemName={() => {}}
                isOverlay
              />
            ) : (
              <div className="bg-white p-6 rounded-[2rem] border-2 border-med-blue shadow-2xl scale-105 opacity-90">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center">
                      <Grips className="w-5 h-5 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-black text-med-dark uppercase">{activeId.replace('section-', '')}</h3>
                 </div>
              </div>
            )
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* Outfit Recommendations */}
      <section className="pt-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-med-orange/10 rounded-2xl flex items-center justify-center text-med-orange">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-black text-med-dark uppercase">Daily Outfit Guide</h2>
        </div>

        <div className="grid gap-4">
          {DAILY_OUTFIT_RECOMMENDATIONS.map((outfit, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-sm font-black text-med-dark uppercase leading-none">{outfit.date} • {outfit.activity}</h4>
                  <p className="text-[10px] font-bold text-med-blue uppercase tracking-widest mt-1">{outfit.weather}</p>
                </div>
              </div>
              <div className="text-xs text-gray-600 leading-relaxed font-medium italic skimmable-markdown">
                <ReactMarkdown>{outfit.recommendation}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="pt-8 pb-20 space-y-6">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-med-blue" />
          <h2 className="text-2xl font-black text-med-dark">PRO TIPS</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-indigo-50/50 rounded-3xl p-6 border border-indigo-100">
            <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-4">Weather-Driven Outfits</h4>
            <div className="space-y-4">
              {PACKING_RECOMMENDATIONS.weather.map((rec, i) => (
                <div key={i}>
                  <p className="text-xs font-black text-med-dark mb-1">{rec.type}</p>
                  <ul className="space-y-1">
                    {rec.items.map((item, j) => (
                      <li key={j} className="text-[11px] font-medium text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-indigo-300 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-med-azure/5 rounded-3xl p-6 border border-med-azure/10">
            <h4 className="text-[10px] font-black text-med-azure uppercase tracking-widest mb-4">Infant Logistics</h4>
            <div className="space-y-4">
              {PACKING_RECOMMENDATIONS.infantSpecific.map((rec, i) => (
                <div key={i}>
                  <p className="text-xs font-black text-med-dark mb-1">{rec.type}</p>
                  <ul className="space-y-1">
                    {rec.items.map((item, j) => (
                      <li key={j} className="text-[11px] font-medium text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-med-azure/30 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .skimmable-markdown strong {
          color: #1E84BB;
          font-weight: 900;
          font-style: normal;
        }
      `}</style>

      {/* Undo toast — shows after a swipe-delete, auto-dismisses after 6s */}
      <AnimatePresence>
        {lastDeleted && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 24, stiffness: 320 }}
            className="fixed bottom-6 left-4 right-4 z-[200] max-w-md mx-auto bg-med-dark text-white rounded-2xl shadow-2xl shadow-med-dark/40 p-3.5 flex items-center gap-3 border border-white/10"
          >
            <div className="w-9 h-9 bg-med-coral/20 rounded-xl flex items-center justify-center shrink-0">
              <Trash2 className="w-4 h-4 text-med-coral" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-black uppercase tracking-widest leading-none">Removed</p>
              <p className="text-xs font-bold opacity-80 mt-1 truncate">{lastDeleted.item.name}</p>
            </div>
            <button
              onClick={undoDelete}
              className="px-3.5 py-2 bg-med-yellow text-med-dark rounded-xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform shrink-0"
            >
              Undo
            </button>
            <button
              onClick={() => setLastDeleted(null)}
              className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center active:scale-90 transition-transform shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
